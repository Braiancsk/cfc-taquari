import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import { HeaderLink } from '@/components/Header/HeaderLink/HeaderLink'
import { FacebookLogo, InstagramLogo, Phone } from 'phosphor-react'
import Image from 'next/image'
import { MobileHeader } from '@/components/MobileHeader/MobileHeader'
import { Button } from '@/components/Button/Button'
import { Input } from '@/components/Input/Input'

export default function index() {
  const router = useRouter()
  const {id} = router.query
  const [windowWidth, setWindowWidth] = useState<null | number>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <main>
      <header className='bg-secondary min-h-[400px] flex flex-col justify-between'>
      {windowWidth! >= 1023 ? (
           <div>
           <div className="container flex items-center justify-between py-6">
                     <Image
                       src="/LOGO.png"
                       width={194}
                       height={41}
                       alt="Logo da empresa CFC Taquari"
                     />
     
                     <div className="flex gap-6 items-center">
                       <div className="flex gap-2">
                         <div className="flex items-center justify-center rounded-lg bg-white w-[30px] h-[30px]">
                           <Phone size={24} />
                         </div>
                         <div className="flex flex-col">
                           <a
                             href="https://api.whatsapp.com/send?phone=5551997376401&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20cursos"
                             className="text-xs font-medium text-white"
                           >
                             (51) 99737-6401
                           </a>
                           <a
                             href="mailto:contato@cfctaquari.com.br"
                             className="text-xs font-medium text-white"
                           >
                             contato@cfctaquari.com.br
                           </a>
                         </div>
                       </div>
                       <a
                         href="https://www.facebook.com/"
                         target="_blank"
                         className="flex items-center justify-center rounded-lg bg-white w-[30px] h-[30px]"
                       >
                         <FacebookLogo size={24} />
                       </a>
                       <a
                         href="https://www.instagram.com/"
                         target="_blank"
                         className="flex items-center justify-center rounded-lg bg-white w-[30px] h-[30px]"
                       >
                         <InstagramLogo size={24} />
                       </a>
                     </div>
           </div>
     
                   <nav className="container flex gap-[10px] items-center text-white my-2">
                   <HeaderLink active={false} text="INÍCIO" link="#inicio"/>
                   <HeaderLink active={false} text="CURSOS" link="#cursos"/>
                   <HeaderLink active={false} text="SOBRE NÓS" link="#sobre-nos"/>
                   <HeaderLink active={false} text="DEPOIMENTOS" link="#depoimentos"/>
                   <HeaderLink active={false} text="CONTATO" link="#contato"/>
                   </nav>
     
           </div>
      ) : (<MobileHeader/>)}
   

              <div className="container min-h-[130px]">
              <h1 className='text-white text-3xl'>Curso {id}</h1>
       
              </div>
      </header>

      <section className="container">
        <h2 className='mt-7 text-3xl font-semibold text-title'>Preencha os dados abaixo para fazer a matricula</h2>
        <p className='text-title/80'>Após preencher os dados, você deverá realizar o pagamento para que a matricula seja concluída</p>
     
        <form className='flex flex-col gap-2 my-7 max-w-[800px]'>
          <div className="flex items-center gap-3">
          <Input
          type='text'
          placeholder='Insira seu nome completo'
          label='Nome'
          />
          <Input
          type='email'
          placeholder='Insira seu melhor Email'
          label='E-mail'
          />

          </div>
        </form>
      </section>
    </main>
  )
}