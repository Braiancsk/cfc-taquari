import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { HeaderLink } from "./HeaderLink/HeaderLink";


interface FixedNavProps {
  homeActive:boolean
  coursesActive:boolean
  aboutActive:boolean
  depositionsActive:boolean
  contactActive:boolean
  blogActive:boolean
}
const MotionFixedNavDesktop = React.forwardRef((props:FixedNavProps, ref: any) => {
  return (
    <section
      ref={ref}
      className="shadow-xl bg-white fixed inset-0 h-[80px] z-20"
    >
      <div className="container flex justify-between items-center h-full">
        <Image
          src="/logo-dark.png"
          width={194}
          height={41}
          alt="Logo da empresa CFC Taquari"
        />

        <ul className="container flex gap-[5px] items-center text-white my-2 text-title/80 justify-end">
          <li>
            <HeaderLink text="INÍCIO" link="#inicio" active={props.homeActive} />
          </li>
          <li>
            <HeaderLink text="CURSOS" link="#cursos" active={props.coursesActive} />
          </li>
          <li>
            <HeaderLink text="SOBRE NÓS" link="#sobre-nos" active={props.aboutActive} />
          </li>
          <li>
            <HeaderLink text="DEPOIMENTOS" link="#depoimentos" active={props.depositionsActive} />
          </li>
          <li>
            <HeaderLink text="FALE CONOSCO" link="#contato" active={props.contactActive} />
          </li>
          <li>
            <HeaderLink text="BLOG" link="/blog" active={props.blogActive} />
          </li>
        </ul>
      </div>
    </section>
  );
});

const FixedNavDesktop = motion(MotionFixedNavDesktop, {
  forwardMotionProps: true,
});

export default FixedNavDesktop
