import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PostProps } from './PostProps.types'

export const HighlightPost = ({date,title,previewDescription,image,alt,url}:PostProps) => {
  return (
    <Link href={url} style={{height:'600px'}} className='relative w-full text-white overflow-hidden block'>
        <Image className='absolute object-cover w-full h-full' src={image} width={1280} height={1280} alt={alt}/>
        <div className='h-full flex justify-end flex-col p-10 w-full z-10 relative post-card-shadow'>
        <span className='text-xs z-20'>{new Date(date).toLocaleDateString("pt-BR")}</span>
        <strong className='text-3xl z-20 my-2 font-semibold'>{title}</strong>
        <p className='text-sm z-20'>{previewDescription}</p>
        </div>
    </Link>
  )
}
