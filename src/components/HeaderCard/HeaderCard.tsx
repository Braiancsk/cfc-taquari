import { Books, Plus } from 'phosphor-react'
import React,{useState} from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { HeaderCardProps } from './HeaderCardProps.types'


export const HeaderCard = ({icon,title,description,link}:HeaderCardProps) => {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <motion.div whileHover={{scale:1.2,backgroundColor:'#720285'}} onMouseEnter={() => setIsHovered(true)}  onMouseLeave={() => setIsHovered(false)} className="border-r-2 last-of-type:border-r-0 border-r-[#C3C3C3] group hover:border-0 flex-1 py-[30px]">
    <div className="flex items-center justify-center flex-col gap-2 text-center">
        {icon}
        <strong className='text-2xl max-w-[168px] text-title group-hover:text-white transition-all'>{title}</strong>
        <p className='max-w-[168px] text-title/80 group-hover:text-white'>{description}</p>
        <AnimatePresence>
        {isHovered && (
        <motion.a href={link} layout initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} exit={{opacity:0,height:0,scale:0}} className='flex items-center justify-center w-7 h-7 rounded-full bg-white'>
        <Plus size={17}/>
        </motion.a>
        )}
        </AnimatePresence>
     
    </div>
</motion.div>
  )
}
