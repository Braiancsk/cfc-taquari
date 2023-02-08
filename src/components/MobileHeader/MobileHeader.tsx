import Image from 'next/image'
import React from 'react'
import { Menu } from './Menu/Menu'


export const MobileHeader = () => {
  return (
    <section className={`flex justify-between items-center w-full container py-[30px]`}>
        <Image className='absolute top-[25px] left-[15px]' src="/logo.png" width={150} height={41} alt="Logo da empresa CFC Taquari"/>

        <Menu/>
    </section>
  )
}
