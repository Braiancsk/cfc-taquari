// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mailOptions, transporter } from '@/services/nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message?: string
  success?:any
}

interface RequestData {
  name:string
  email:string
  phone:string
  message:string
}

const CONTACT_FIELDS:any = {
  name:'Nome',
  email:'Email',
  phone: 'Telefone',
  message:'Mensage'
}

const generateEmailContet = (data:RequestData) => {
  const stringData = Object.entries(data).reduce((str:string, [key, val]) => str += `${CONTACT_FIELDS[key]}: \n${val} \n \n`, '')

  const htmlData = Object.entries(data).reduce((str:string, [key, val]) => str += `<h1>${CONTACT_FIELDS[key]}</h1> <p>${val}</p>`, '')
  return {
    text:stringData,
    html:htmlData
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'POST'){
    const data:RequestData = req.body
    if(!data.name || !data.email || !data.phone || !data.message){
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' })
    }

    try{
      await transporter.sendMail({
        ...mailOptions,
        subject:'Mensagem do site do CFC Taquari',
        text:'Esse é um texto',
        html:'<h1>Test Title</h1> <p>Some body text</p>'
      })
      res.status(200).json({success: true})
    }catch(err:any){
      console.log(err)
      res.status(400).json({ message: err.message })
    }
  }
  return res.status(400).json({ message: 'Não foi possível enviar o formulário' })
}
