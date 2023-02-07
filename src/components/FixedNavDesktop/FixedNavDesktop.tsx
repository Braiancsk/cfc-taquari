import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const MotionFixedNavDesktop = React.forwardRef((props, ref:any) => {
  return (
    <section ref={ref} className='shadow-xl bg-white fixed inset-0 h-[80px] z-20'>
    <div className='container flex justify-between items-center h-full'>
        <Image src="/LOGO.png" width={194} height={41} alt="Logo da empresa CFC Taquari" />

           <ul className='container flex gap-[5px] items-center text-white my-2 text-title/80'>
                <li>
                <a href="#inicio" className='flex-1 border-r-0 border-l-0 border-b-0 border-t-4 border-4 transition hover:border-secondary border-secondary py-[13px] px-5'>
                    <span className='font-semibold'>INÍCIO</span>
                </a>
                </li>
                <li>
                <a href='#cursos' className='flex-1 border-r-0 border-l-0 group border-b-0 border-t-4 border-4 transition hover:border-secondary border-gray-500/25 py-[13px] px-5'>
                    <span className='font-semibold'>CURSOS</span>
                </a>
                </li>
                <li>
                <a href='#sobre-nos' className='flex-1 border-r-0 border-l-0 border-b-0 border-t-4 border-4 transition hover:border-secondary border-gray-500/25 py-[13px] px-5'>
                    <span className='font-semibold'>SOBRE NÓS</span>
                </a>
                </li>
                <li>
                <a href='#depoimentos' className='flex-1 border-r-0 border-l-0 border-b-0 border-t-4 border-4 transition hover:border-secondary border-gray-500/25 py-[13px] px-5'>
                    <span className='font-semibold'>DEPOIMENTOS</span>
                </a>
                </li>
                <li>
                <a href='#contato' className='flex-1 border-r-0 border-l-0 border-b-0 border-t-4 border-4 transition hover:border-secondary border-gray-500/25 py-[13px] px-5'>
                    <span className='font-semibold'>FALE CONOSCO</span>
                </a>
                </li>
            </ul>
    </div>
    </section>
  )
})

export const FixedNavDesktop = motion(MotionFixedNavDesktop, { forwardMotionProps: true })