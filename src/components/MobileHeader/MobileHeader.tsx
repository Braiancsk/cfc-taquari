import Image from 'next/image'
import React from 'react'
import { Menu } from './Menu/Menu'

interface MobileHeader {
  mobileLogo?:'dark' | 'white'
}
export const MobileHeader = ({mobileLogo = 'white'}:MobileHeader) => {
  return (
    <section className={`flex justify-between items-center w-full container py-[30px]`}>
        <Image className='absolute top-[25px] left-[15px]' src={mobileLogo === 'white' ? '/logo.png' : '/logo-dark.png'} width={150} height={41} alt="Logo da empresa CFC Taquari"/>

        <Menu/>
    </section>
  )
}
