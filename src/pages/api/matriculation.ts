import axios from 'axios';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mailOptions, transporter } from '@/services/nodemailer'
import NextCors from 'nextjs-cors';
import type { NextApiRequest, NextApiResponse } from 'next'

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
 
    const matriculationPayload = {
    aluno:{ 
    codigoCFC: "CHC00223",
    codigoCurso: req.body.data.customer.metadata.codigoCurso,
    nome: req.body.data.customer.metadata.nome,
    email: req.body.data.customer.metadata.email,
    cpf:req.body.data.customer.metadata.cpf,
    telefone: req.body.data.customer.metadata.telefone,
    nascimento:req.body.data.customer.metadata.nascimento,
    cep:req.body.data.customer.metadata.cep,
    endereco: req.body.data.customer.metadata.endereco,
    numero: req.body.data.customer.metadata.numero,
    complemento: req.body.data.customer.metadata.complemento,
    bairro:req.body.data.customer.metadata.bairro,
    cidade: req.body.data.customer.metadata.cidade
  }}
    console.log(req.body)
    try{
      const {data} = await axios.post('https://homologacao.unicfcead.com.br/api/cadastrar_aluno',matriculationPayload,{
        headers:{
          Authorization:`Basic ${btoa(process.env.UNI_BASIC_AUTH!)}`
        }
      })
      console.log(data)
      return res.status(200).json({ data })
    }catch(error:any){
      console.log(error)
      return res.status(400).json({ message: error.response.data })
    }
  }
  
  return res.status(400).json({ message: 'Ocorreu um erro' })
}
