import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Quotes } from 'phosphor-react'
import Image from 'next/image'

export const Depositions = () => {
    const [sliderRef] = useKeenSlider({
        mode: "snap",
        slides: {
          origin: "center",
          perView: 2,
          spacing: 10,
        },
    })

  return (
    <section id="#depositions" className='py-11 bg-secondary/20 my-[67px]'>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className='lg:max-w-[572px] px-[60px] w-full mx-auto lg:ml-auto'>
                <strong className='text-[40px] leading-[48px] text-secondary font-semibold block max-w-[550px]'>O que nossos alunos dizem sobre nós</strong>
                <p className='font-semibold text-lg text-title/80 max-w-[380px] leading-[28px]'>Veja o que nossos alunos dizem sobre nossa alta taxa de aprovação</p>
            </div>
            <div className="w-full max-w-[711px] mx-auto lg:ml-auto">
            <div ref={sliderRef} className="keen-slider">

            <div className="keen-slider__slide lg:max-w-[384px] w-full rounded-lg bg-[#720285] text-white p-[20px]">
            <Quotes size={50} weight="fill" />
            <p className='font-medium text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui risus, cursus a semper a, imperdiet nec nisl. Nam tincidunt imperdiet eros, eu semper arcu congue luctus.</p>
            <div className="flex gap-2 item-center mt-[21px]">
                <Image src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Aluno depoimento" width={50} height={50} className="rounded-full h-[50px] w-[50px] object-cover"/> 
                <div className="flex flex-col gap-1">
                <strong className='font-medium'>Jane Doe</strong>
                <p className='text-xs'>CFC Taquari</p>
                </div>
            </div>
            </div>
            <div className="keen-slider__slide lg:max-w-[384px] w-full rounded-lg bg-[#720285] text-white p-[20px]">
            <Quotes size={50} weight="fill" />
            <p className='font-medium text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui risus, cursus a semper a, imperdiet nec nisl. Nam tincidunt imperdiet eros, eu semper arcu congue luctus.</p>
            <div className="flex gap-2 item-center mt-[21px]">
                <Image src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Aluno depoimento" width={50} height={50} className="rounded-full h-[50px] w-[50px] object-cover"/> 
                <div className="flex flex-col gap-1">
                <strong className='font-medium'>Jane Doe</strong>
                <p className='text-xs'>CFC Taquari</p>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    </section>
  )
}
