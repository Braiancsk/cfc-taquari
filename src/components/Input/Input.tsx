import React from 'react'
import { InputProps } from './InputProps.types'

export const Input = ({type,label,placeholder}:InputProps) => {
  return (
    <div className='flex flex-1 flex-col gap-1'>
        <label htmlFor={label} className='text-title-/80 text-sm'>{label}</label>
        <input type={type} placeholder={placeholder} id={label} className='transition placeholder:text-sm placeborder:text-title/80 border border-gray-800 focus:outline-0 focus:ring focus:ring-secondary p-2 rounded-lg'/>
    </div>
  )
}
