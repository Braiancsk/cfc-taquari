import Image from 'next/image'
import React from 'react'
import { Menu } from '../Menu/Menu'
import { FixedMobileHeaderProps } from './FixedMobileHeaderProps.types'

export const FixedMobileHeader = ({top = '0'}:FixedMobileHeaderProps) => {
  return (
    <section className={`flex justify-between items-center w-full container py-[30px] fixed inset-0 mx-auto shadow-xl z-[999] bg-white h-[60px]`}>
    <Image className='absolute top-[10px] left-[15px]' src="/logo-dark.png" width={150} height={41} alt="Logo da empresa CFC Taquari"/>
    <Menu top={top}/>
</section>
  )
}
