import axios from 'axios';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mailOptions, transporter } from '@/services/nodemailer'
import NextCors from 'nextjs-cors';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message?: string
  success?:any
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
    const matriculationPayload = req.body.data.customer.metadata
    console.log(matriculationPayload)
    try{
      const {data} = await axios.post('https://homologacao.unicfcead.com.br/api/cadastrar_aluno',matriculationPayload,{
        headers:{
          Authorization:`Basic ${process.env.UNI_BASIC_AUTH}`
        }
      })
      console.log(data)

    }catch(error:any){
      console.log(error)
      return res.status(400).json({ message: error.response.data })
    }
  }
  
  return res.status(400).json({ message: 'Ocorreu um erro' })
}
