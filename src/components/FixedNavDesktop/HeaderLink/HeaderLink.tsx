import React from 'react'
import { HeaderLinkProps } from './HeaderLinkProps.types'

export const HeaderLink = ({text,link,active}:HeaderLinkProps) => {
  return (
    <a href={link} className={`flex-1 border-r-0 border-l-0 border-b-0 border-t-4 border-4 transition hover:border-secondary ${active ? 'border-secondary' : 'border-gray-500/25'} py-[13px] px-5`}>
    <span className='font-semibold'>{text}</span>
</a>
  )
}
