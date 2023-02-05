import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='pt-[28px] pb-[42px] bg-secondary text-white text-center lg:text-left'>
        <div className="container grid gap-10 lg:gap-5 lg:grid-cols-3 lg:justify-start justify-center">
            <div className='mx-auto lg:mx-0'>
                <Image src="/logo.png" width={194} height={41} alt="Logo do CFC Taquari"/>
            </div>

            <div className='flex flex-col gap-1'>
            <strong className='font-semibold text-lg'>Mapa do site</strong>
            <ul>
                <li><a className='text-lg' href="#inicio">Início</a></li>
                <li><a className='text-lg' href="#sobre-nos">Sobre nós</a></li>
                <li><a className='text-lg' href="#cursos">Cursos</a></li>
                <li><a className='text-lg' href="#contato">Fale conosco</a></li>
            </ul>
            </div>

            <div className='flex flex-col gap-1'>
            <strong className='font-semibold text-lg'>Mapa do site</strong>
            <p className='text-lg'>Rua Osvaldo Aranha, 2170 - 2º Andar Edifício Palazzo Moro - Centro, Taquari - RS, 95860-000, Brazil</p>
            </div>
        </div>
    </footer>
  )
}
