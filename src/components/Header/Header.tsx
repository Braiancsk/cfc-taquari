import Image from 'next/image'
import React from 'react'
import { Books, CalendarBlank, FacebookLogo, Headset, InstagramLogo, Phone, Plus, Student } from "phosphor-react";
import { Button } from '../Button/Button';

import { HeaderCard } from '../HeaderCard/HeaderCard';

const cards = [
    {
        icon:<Books size={50} color="#B2B2B2"/>,
        title:'Cursos',
        description:'Diversos cursos para você aumentar a sua chance de aprovação',
        link:"#cursos"
    },
    {
        icon:<CalendarBlank size={50} color="#B2B2B2"/>,
        title:'Agenda',
        description:'Agende e desmarque suas aulas sem sair de casa',
        link:"https://agendacfc.com.br/?auth=b4812f2795a5d920ca47bcec471b28b8473"
    },
    {
        icon:<Student size={50} color="#B2B2B2"/>,
        title:'Simulados',
        description:'Simulados para você testar seus conhecimentos',
        link:"http://mariaolma.com.br/prova/"
    },
    {
        icon:<Headset size={50} color="#B2B2B2"/>,
        title:'Atendimento',
        description:'Atendimento flexível para cidade de Tabaí/RS e Triunfo/RS',
        link:"#contato"
    },
]

export const Header = () => {
    return (
        <header className='bg-hero-bg bg-cover bg-center min-h-[750px]'>
            <div className="container flex items-center justify-between py-6">
                <Image src="/LOGO.png" width={194} height={41} alt="Logo da empresa CFC Taquari" />

                <div className="flex gap-6 items-center">
                    <div className="flex gap-2">
                        <div className="flex items-center justify-center rounded-lg bg-white w-[30px] h-[30px]">
                            <Phone size={24} />
                        </div>
                        <div className='flex flex-col'>
                            <a href="https://api.whatsapp.com/send?phone=5551997376401&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20cursos" className='text-xs font-medium text-white'>(51) 99737-6401</a>
                            <a href='mailto:contato@cfctaquari.com.br' className='text-xs font-medium text-white'>contato@cfctaquari.com.br</a>
                        </div>
                    </div>
                    <a href="https://www.facebook.com/" target="_blank" className="flex items-center justify-center rounded-lg bg-white w-[30px] h-[30px]">
                        <FacebookLogo size={24} />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" className="flex items-center justify-center rounded-lg bg-white w-[30px] h-[30px]">
                        <InstagramLogo size={24} />
                    </a>
                </div>
            </div>

            <nav className='container flex gap-[10px] items-center text-white my-2'>
                <a href="#inicio" className='flex-1 border-r-0 border-l-0 border-b-0 border-t-4 border-4 transition hover:border-secondary border-secondary py-[13px] px-5'>
                    <span className='font-semibold text-lg'>INÍCIO</span>
                </a>
                <a href='#cursos' className='flex-1 border-r-0 border-l-0 group border-b-0 border-t-4 border-4 transition hover:border-secondary border-white/25 py-[13px] px-5'>
                    <span className='font-semibold text-lg'>CURSOS</span>
                </a>
                <a href='#sobre-nos' className='flex-1 border-r-0 border-l-0 border-b-0 border-t-4 border-4 transition hover:border-secondary border-white/25 py-[13px] px-5'>
                    <span className='font-semibold text-lg'>SOBRE NÓS</span>
                </a>
                <a href='#depoimentos' className='flex-1 border-r-0 border-l-0 border-b-0 border-t-4 border-4 transition hover:border-secondary border-white/25 py-[13px] px-5'>
                    <span className='font-semibold text-lg'>DEPOIMENTOS</span>
                </a>
                <a href='#depoimentos' className='flex-1 border-r-0 border-l-0 border-b-0 border-t-4 border-4 transition hover:border-secondary border-white/25 py-[13px] px-5'>
                    <span className='font-semibold text-lg'>FALE CONOSCO</span>
                </a>
            </nav>

            <section className='container py-[64px] px-4 text-white  text-center'>
                <h1 className='text-4xl font-semibold'>Conclua seus cursos em tempo recorde</h1>
                <p className='text-lg font-medium mt-1'>Conheça o CFC Taquari</p>
                <div className="max-w-[340px] w-full mx-auto mt-4">
                    <Button href='#cursos' text="Quero conhecer" />
                </div>
            </section>

            <div className='relative lg:flex justify-center hidden container'>
            <section className="flex w-full max-w-[90%] items-center gap-3 bg-white p-3 rounded-lg shadow-2xl absolute top-[180px]">
                {cards.map(card => {
                    return (
                        <HeaderCard
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                        />
                    )
                })}
            </section>
            </div>
        </header>
    )
}
