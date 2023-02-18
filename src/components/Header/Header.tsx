import Image from "next/image";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  Books,
  CalendarBlank,
  FacebookLogo,
  Headset,
  InstagramLogo,
  Phone,
  Plus,
  Student,
} from "phosphor-react";
import { Button } from "../Button/Button";

import { HeaderCard } from "../HeaderCard/HeaderCard";
import { MobileHeader } from "../MobileHeader/MobileHeader";
import { AnimatePresence, useInView } from "framer-motion";
import FixedNavDesktop from "../FixedNavDesktop/FixedNavDesktop";
import { HeaderLink } from "./HeaderLink/HeaderLink";
import { HeaderActive } from "@/@types/HeaderActive.types";
import { FixedMobileHeader } from "../MobileHeader/FixedMobileHeader/FixedMobileHeader";

const cards = [
  {
    icon: <Books size={50} color="#B2B2B2" />,
    title: "Cursos",
    description: "Diversos cursos para você aumentar a sua chance de aprovação",
    link: "#cursos",
  },
  {
    icon: <CalendarBlank size={50} color="#B2B2B2" />,
    title: "Agenda",
    description: "Agende e desmarque suas aulas sem sair de casa",
    link: "https://agendacfc.com.br/?auth=b4812f2795a5d920ca47bcec471b28b8473",
  },
  {
    icon: <Student size={50} color="#B2B2B2" />,
    title: "Simulados",
    description: "Simulados para você testar seus conhecimentos",
    link: "http://mariaolma.com.br/prova/",
  },
  {
    icon: <Headset size={50} color="#B2B2B2" />,
    title: "Atendimento",
    description: "Atendimento flexível para cidade de Tabaí/RS e Triunfo/RS",
    link: "#contato",
  },
];

export const Header = ({coursesActive,aboutActive,depositionsActive,contactActive}:HeaderActive) => {
  const [windowWidth, setWindowWidth] = useState<null | number>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const headerRef = useRef<any>(null);
  const isHeaderInView = useInView(headerRef,{amount:1});
  

  return (
    <header
      id="inicio"
      className="bg-hero-bg bg-cover bg-center lg:min-h-[750px]"
    >
     <AnimatePresence>
      {windowWidth! <= 1023 ? (
        <>
        {!isHeaderInView && (
          <FixedMobileHeader top={isHeaderInView ? '0' : '-10px'}/>
        )}
        {!isHeaderInView ? (
          <div className="py-[30px]"></div>
        ) :  <MobileHeader/>}
       
        </>
      ) : (
        <>
          <div className="container flex items-center justify-between py-6">
                <Image
                  src="/logo.png"
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
                    rel="noreferrer"
                    className="flex items-center justify-center rounded-lg bg-white w-[30px] h-[30px]"
                  >
                    <FacebookLogo size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center rounded-lg bg-white w-[30px] h-[30px]"
                  >
                    <InstagramLogo size={24} />
                  </a>
                </div>
              </div>

              <nav className="container flex gap-[10px] items-center text-white my-2">
              <HeaderLink active={isHeaderInView} text="INÍCIO" link="#inicio"/>
              <HeaderLink active={coursesActive} text="CURSOS" link="#cursos"/>
              <HeaderLink active={aboutActive} text="SOBRE NÓS" link="#sobre-nos"/>
              <HeaderLink active={depositionsActive} text="DEPOIMENTOS" link="#depoimentos"/>
              <HeaderLink active={contactActive} text="CONTATO" link="#contato"/>
              </nav>
          {!isHeaderInView &&  <FixedNavDesktop initial={{opacity:0, y:-100}} 
                homeActive={isHeaderInView}
                coursesActive={coursesActive}
                aboutActive={aboutActive}
                depositionsActive={depositionsActive}
                contactActive={contactActive}
                transition={{type:'spring'}} 
                animate={{opacity:1,y:0}} 
                exit={{opacity:0, y:-100}}/> }
        </>
      )}
      </AnimatePresence>

      <section ref={headerRef} className="container py-[64px] px-4 text-white text-center">
        <h1 className="text-4xl font-semibold">
          Conclua seus cursos em tempo recorde
        </h1>
        <p className="text-lg font-medium mt-1">Conheça o CFC Taquari</p>
        <div className="max-w-[340px] w-full mx-auto mt-4">
          <Button href="#cursos" text="Quero conhecer" />
        </div>
      </section>

      <div className="relative lg:flex justify-center hidden container">
        <section className="flex lg:flex-row flex-col w-full lg:max-w-[90%] items-center gap-3 bg-white p-3 rounded-lg shadow-2xl absolute top-[180px]">
          {cards.map((card) => {
            return (
              <HeaderCard
                key={card.link}
                icon={card.icon}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            );
          })}
        </section>
      </div>
    </header>
  );
};
