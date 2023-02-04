import { Button } from '@/components/Button/Button'
import React from 'react'

export const Contact = () => {
  return (
    <section className='container grid md:grid-cols-2 pb-[67px]'>
        <div className=''>
            <strong className='text-4xl font-semibold text-secondary'>Entre em contato conosco</strong>
            <p className='text-title/80 font-semibold text-sm'>
            Entre em contato com nosso time que iremos te responder o mais breve possível
            </p>
        </div>

        <form className='p-5 bg-secondary rounded-lg text-white'>
         <div className="flex flex-col">
            <label htmlFor="name">Nome</label>
            <input placeholder='Insira seu nome completo' className='rounded-full py-2 px-4 w-full text-title/80 focus:outline-none focus:ring focus:ring-purple-700 transition placeholder:text-title/50 placeholder:text-sm' type="text" id="name" />
         </div>
         <div className="flex flex-col mt-3">
            <label htmlFor="email">Email</label>
            <input placeholder='Insira seu melhor E-mail' className='rounded-full py-2 px-4 w-full text-title/80 focus:outline-none focus:ring focus:ring-purple-700 transition placeholder:text-title/50 placeholder:text-sm' type="email" id="email" />
         </div>
         <div className="flex flex-col mt-3">
            <label htmlFor="phone">Telefone</label>
            <input placeholder='Insira seu número principal' className='rounded-full py-2 px-4 w-full text-title/80 focus:outline-none focus:ring focus:ring-purple-700 transition placeholder:text-title/50 placeholder:text-sm' type="text" id="phone" />
         </div>
         <div className="flex flex-col mt-3">
            <label htmlFor="phone">Telefone</label>
            <textarea placeholder='Deixe uma mensagem' className='min-h-[130px] resize-none rounded-lg py-2 px-4 w-full text-title/80 focus:outline-none focus:ring focus:ring-purple-700 transition placeholder:text-title/50 placeholder:text-sm' id="message"></textarea>
         </div>
         <div className="max-w-[320px] ml-auto mt-4">
            <Button text='Enviar mensagem' padding='10px' fontSize='16px'/>
         </div>
        </form>
    </section>
  )
}
