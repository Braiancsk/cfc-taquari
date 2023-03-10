import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"contato@cfctaquari.com.br",
        pass:""
    }
})

export const mailOptions = {
    from:"contato@cfctaquari.com.br",
    to:"contato@cfctaquari.com.br",
}