import axios from "axios"


export const pagarmeApi = axios.create({
    baseURL: 'https://api.pagar.me/core/v5',
    headers:{
        Authorization:`Basic ${Buffer.from(process.env.PAGARME_SK!).toString('base64')}`
    }
})