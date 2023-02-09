import { Button } from '@/components/Button/Button'
import { api } from '@/services/api'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

interface FormData {
   name:string
   email:string
   phone:string
   message:string
}
export const Contact = React.forwardRef((props,ref:any) => {
   const {mutate,isLoading} = useMutation({
      mutationFn:(data:FormData) => sendEmail(data)
   })
   const { register, handleSubmit} = useForm<FormData>();

    async function sendEmail(payload:FormData){
      console.log(payload)
      try{
         const {data} = await api.post('/contact',payload)
         console.log(data)
         Swal.fire({
            title:'Formulário enviado com sucesso',
            text:  'Seu email foi enviado. Iremos entrar em contato em breve',
            icon: 'success',
            confirmButtonText: 'Tentar novamente'
          })
      }catch(error:any){
         console.error(error)
         Swal.fire({
            title:'Ocorreu um erro ao enviar o formulário',
            text:  error.response.message,
            icon: 'error',
            confirmButtonText: 'Tentar novamente'
          })
      }
    }
  
  function onSubmit(data:FormData){
    mutate(data)
  }
  return (
    <section ref={ref} id="contato" className='container grid lg:grid-cols-2 gap-10 lg:gap-2 pb-[67px]'>
        <div className=''>
            <strong className='text-4xl font-semibold text-secondary'>Entre em contato conosco</strong>
            <p className='text-title/80 font-semibold text-sm'>
            Entre em contato com nosso time que iremos te responder o mais breve possível
            </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='p-5 bg-secondary rounded-lg text-white'>
         <div className="flex flex-col">
            <label htmlFor="name">Nome</label>
            <input {...register("name")} placeholder='Insira seu nome completo' className='rounded-full py-2 px-4 w-full text-title/80 focus:outline-none focus:ring focus:ring-purple-700 transition placeholder:text-title/50 placeholder:text-sm' type="text" id="name" />
         </div>
         <div className="flex flex-col mt-3">
            <label htmlFor="email">Email</label>
            <input {...register("email")} placeholder='Insira seu melhor E-mail' className='rounded-full py-2 px-4 w-full text-title/80 focus:outline-none focus:ring focus:ring-purple-700 transition placeholder:text-title/50 placeholder:text-sm' type="email" id="email" />
         </div>
         <div className="flex flex-col mt-3">
            <label htmlFor="phone">Telefone</label>
            <input {...register("phone")} placeholder='Insira seu número principal' className='rounded-full py-2 px-4 w-full text-title/80 focus:outline-none focus:ring focus:ring-purple-700 transition placeholder:text-title/50 placeholder:text-sm' type="text" id="phone" />
         </div>
         <div className="flex flex-col mt-3">
            <label htmlFor="phone">Mensagem</label>
            <textarea {...register("message")} placeholder='Deixe uma mensagem' className='min-h-[130px] resize-none rounded-lg py-2 px-4 w-full text-title/80 focus:outline-none focus:ring focus:ring-purple-700 transition placeholder:text-title/50 placeholder:text-sm' id="message"></textarea>
         </div>
         <div className="max-w-[320px] ml-auto mt-4">
            <Button isLoading={isLoading} text={isLoading ? 'Enviando' : 'Enviar mensagem'} padding='17px' fontSize='16px'/>
         </div>
        </form>
    </section>
  )
})
