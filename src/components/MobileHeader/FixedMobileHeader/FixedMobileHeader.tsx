import Image from 'next/image'
import React from 'react'
import { Menu } from '../Menu/Menu'

export const FixedMobileHeader = () => {
  return (
    <section className={`flex justify-between items-center w-full container py-[30px] fixed inset-0 w-full mx-auto shadow-xl z-40 bg-white h-[50px]`}>
    <Image className='absolute top-[25px] left-[15px]' src="/logo.png" width={100} height={41} alt="Logo da empresa CFC Taquari"/>

    <Menu/>
</section>
  )
}
