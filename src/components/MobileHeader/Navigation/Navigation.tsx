import React from 'react'
import { motion } from "framer-motion";
import { MenuItem } from '../MenuItem/MenuItem';
import { NavigationProps } from './NavigationProps.types';

const links = [
    {
        id:'inicio',
        text:'Início'
    },
    {
        id:'cursos',
        text:'Cursos'
    },
    {
        id:'sobre-nos',
        text:'Sobre nós'
    },
    {
        id:'depoimentos',
        text:'Depoimentos'
    },
    {
        id:'contato',
        text:'Fale conosco'
    },
]

const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

export const Navigation = ({toggle,isOpen}:NavigationProps) => {
  return (
    <motion.ul className={`p-[25px] absolute top-[100px] right-0 w-full ${isOpen ? '' : 'pointer-events-none'}`} variants={variants}>
    {links.map(i => (
      <MenuItem onClick={() => toggle()} link={i.id} text={i.text} key={i.id} />
    ))}
  </motion.ul>
  )
}
