import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AsideProps } from './AsideProps.types'

export const AsidePost = ({image,url,alt,title,date}:AsideProps) => {
  return (
    <Link href={url} className='flex flex-col gap-3'>
        <Image className='object-cover w-full h-[100px]' src={image} width={1280} height={1280} alt={alt}/>
        <div className='flex flex-col gap-2'>
        <span className='text-xs text-title'>{new Date(date).toLocaleDateString("pt-BR")}</span>
        <strong className='text-title text-lg font-semibold'>{title}</strong>
        </div>
    
    </Link>
  )
}
