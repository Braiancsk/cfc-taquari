import React from 'react'
import { ButtonProps } from './ButtonProps.types'

export const Button = ({text,variant = 'primary',href, padding = '16px',fontSize = '20px'}:ButtonProps) => {
  return (
    <>
    {href ? (
        <a style={{padding:padding,fontSize:fontSize}} className={`text-white font-semibold ${variant === 'primary' ? 'bg-primary' : 'bg-secondary'} w-full rounded-full block hover:opacity-90 transition`} href={href}>{text}</a>
    ) : (
        <button style={{padding:padding,fontSize:fontSize}} className={`text-white font-semibold ${variant === 'primary' ? 'bg-primary' : 'bg-secondary'} w-full rounded-full hover:opacity-90 transition`}>{text}</button>
    )}
  
    </>
  )
}
