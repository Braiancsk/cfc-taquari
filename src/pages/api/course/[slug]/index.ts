// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from 'nextjs-cors';
import type { NextApiRequest, NextApiResponse } from 'next'
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

 });
  if(req.method === 'GET'){
    const {slug} = req.query
    const course = courses.find(course => course.slug === slug)
   return res.status(200).json({ data: course })
  }
  
  return res.status(400).json({ message: 'The request method is invalid' })
}
