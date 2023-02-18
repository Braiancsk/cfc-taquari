import axios from 'axios';
import NextCors from 'nextjs-cors';
import type { NextApiRequest, NextApiResponse } from 'next'
import { format } from 'date-fns';
import { courses } from '@/coursesData/coursesData';

type Data = {
  message?: string
  success?:any
  data?:any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });

 if(req.method === 'POST'){

   const date = new Date();
   const boletoDueAt = format(new Date(date.setDate(date.getDate() + 3 /*days*/)), 'MM/dd/yyyy') 
   const course = courses.find(course => course.codigoCurso === req.body.customer.metadata.codigoCurso)
    const items =  [
      {
        code:course?.codigoCurso+'',
        amount: 100*course?.amount!, //100 = R$1,00 * quantos reais você deseja
        quantity:1,
        description:course?.title
      }
    ]

    const payments = [
      {
        payment_method: "checkout",
        checkout: {
          expires_in: 120,
          billing_address_editable: false,
          customer_editable: true,
          accepted_payment_methods: ["credit_card", "boleto", "pix"],
          success_url: "https://cfc-taquari.vercel.app/obrigado",
          boleto:{
            instructions:'Vencimento do boleto acontece em 3 dias. Pague o quanto antes para que possamos confirmar sua matrícula',
            due_at:boletoDueAt,
          },
          pix:{
            expires_in:60*30,
          }
        },
    
      },
    ]

    const pagarmePayload = {
      items:items,
      payments:payments,
      ...req.body
    }

     try{
     const {data} = await axios.post('https://api.pagar.me/core/v5/orders',pagarmePayload,{
      headers: {               
        Authorization: 'Basic ' + Buffer.from(`${process.env.PAGARME_SK}:`).toString('base64'),           
      },
     })

      return res.status(200).json({ data })
     }catch(error:any){
      console.error(JSON.stringify(error.response.data.errors))
      return res.status(400).json({ message:error.response.data })
     }
 }
  
  return res.status(400).json({ message: 'Request Method its not valid' })
}
