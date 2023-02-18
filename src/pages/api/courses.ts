// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mailOptions, transporter } from '@/services/nodemailer'
import NextCors from 'nextjs-cors';
import type { NextApiRequest, NextApiResponse } from 'next'
import { courses } from '@/coursesData/coursesData';

type Data = {
  message?: string
  success?:any
  courses?:any
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
  if(req.method === 'GET'){
    try{
      return res.status(200).json({ courses: courses })
    }catch(error:any){
      return res.status(400).json({ message: 'Was not possible to resolve the request' })
    }
  }
  
  return res.status(400).json({ message: 'The request method is invalid' })
}
