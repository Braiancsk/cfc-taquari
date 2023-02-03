import Image from 'next/image'
import React from 'react'
import { Button } from '../Button/Button'
import { CourseCardProps } from './CourseCardProps.types'

export const CourseCard = ({title,link,imageUrl}:CourseCardProps) => {
  return (
    <a href={link} className='rounded-lg shadow-lg relative flex-1 h-[431px] flex flex-col items-end justify-end group overflow-hidden'>
        <Image width={400} height={400} className='absolute rounded-lg w-full h-full mx-auto object-cover group-hover:scale-110 transition-all' src={imageUrl} alt='Imagem do curso'/>
        <div className='w-full card-shadow relative z-10 p-3 rounded-b-lg'>
        <strong className='text-white text-xl mb-4 block w-full'>{title}</strong>
        <a className={`text-white text-lg bg-primary p-2 text-center w-full rounded-full block hover:opacity-90 transition`} href={link}>Saiba mais</a>
        </div>
        
    </a>
  )
}
