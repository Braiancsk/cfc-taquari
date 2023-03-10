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
    codigoCurso: req.body.codigoCurso,
    nome: req.body.nome,
    email: req.body.email,
    cpf:req.body.cpf,
    telefone: req.body.telefone,
    nascimento:req.body.nascimento,
    cep:req.body.cep,
    endereco: req.body.endereco,
    numero: req.body.numero,
    complemento: req.body.complemento,
    bairro:req.body.bairro,
    cidade: req.body.cidade
  }}
    try{
      const {data} = await axios.post('https://unicfcead.com.br/api/matricula-inativa-aluno',matriculationPayload,{
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
