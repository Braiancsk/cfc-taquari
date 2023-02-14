import axios from 'axios';
import { pagarmeApi } from './../../services/pagarmeApi';
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
     try{
     const {data} = await axios.post('https://api.pagar.me/core/v5/orders',req.body,{
      headers: {               
        Authorization: 'Basic ' + Buffer.from(`${process.env.PAGARME_SK}:`).toString('base64'),           
      },
     })
      console.log(data)
      return res.status(200).json({ message:data })
     }catch(error:any){
      console.error(JSON.stringify(error.response.data.errors))
      return res.status(400).json({ message:error.response.data })
     }
 }
  
  return res.status(400).json({ message: 'Request Method its not valid' })
}
