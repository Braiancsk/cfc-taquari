import axios from "axios";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mailOptions, transporter } from "@/services/nodemailer";
import NextCors from "nextjs-cors";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message?: string;
  success?: any;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method === "POST") {
    console.log(req.body);
    const matriculationPayload = {
      matriculation_id: +req.body.data.customer.metadata.matriculation_id,
    };
    try {
      const { data } = await axios.post(
        "https://unicfcead.com.br/api/ativar-matricula-aluno",
        matriculationPayload,
        {
          headers: {
            Authorization: `Basic ${btoa(process.env.UNI_BASIC_AUTH!)}`,
          },
        }
      );
      console.log({ respostaDoEAD: data });
      return res.status(200).json({ data });
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({ message: error.response.data });
    }
  }

  return res.status(400).json({ message: "Ocorreu um erro" });
}
