import React from 'react'
import { ButtonProps } from './ButtonProps.types'

export const Button = ({text,variant = 'primary',href}:ButtonProps) => {
  return (
    <>
    {href ? (
        <a className={`text-white font-semibold text-2xl ${variant === 'primary' ? 'bg-primary' : 'bg-secondary'} p-4 w-full rounded-full block hover:opacity-90 transition`} href={href}>{text}</a>
    ) : (
        <button className={`text-white font-semibold text-2xl ${variant === 'primary' ? 'bg-primary' : 'bg-secondary'} p-4 w-full rounded-full hover:opacity-90 transition`}>{text}</button>
    )}
  
    </>
  )
}
