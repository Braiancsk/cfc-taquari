import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PostCardProps } from './PostCardProps.types'

export const PostCard = ({image,url,alt,title,previewDescription,date}:PostCardProps) => {
  return (
    <Link href={url} className='flex flex-col gap-8'>
        <Image className='object-cover w-full h-[200px]' src={image} width={1280} height={1280} alt={alt}/>
        <div className='flex flex-col gap-3'>
        <span className='text-xs text-title'>{new Date(date).toLocaleDateString("pt-BR")}</span>
        <strong className='text-title text-2xl font-semibold'>{title}</strong>
        <p className='text-title text-sm font-semibold'>{previewDescription}</p>
        </div>
    
    </Link>
  )
}
