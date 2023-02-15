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
  console.log(req.body)
  
  return res.status(400).json({ message: 'Ocorreu um erro' })
}
