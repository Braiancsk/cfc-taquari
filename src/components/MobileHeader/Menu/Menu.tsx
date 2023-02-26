import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { Navigation } from "../Navigation/Navigation";
import { MenuToggle } from "../MenuToggle/MenuToggle";
import { useDimensions } from "@/hooks/use-dimensions";
import { MenuProps } from "./MenuProps.types";


let windowW:any

if (typeof window !== "undefined") {
    // Client-side-only code
    windowW = window.innerWidth
}

export const Menu = ({size = '30px', top = '0'}:MenuProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  
const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: `circle(${size} at 247px 40px)`,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <>
    {
        isOpen && (
            <motion.div variants={sidebar} animate={isOpen ? "open" : "closed"} onClick={() => toggleOpen()} className="bg-black/50 w-full min-h-screen fixed inset-0 z-10"></motion.div>
        )
    }

    <motion.nav
    style={{top:top}}
      className={`w-[300px] fixed-navbar absolute right-0 bottom-0 z-20 ${!isOpen ? 'pointer-events-none' : ''}`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="bg-white w-[300px] fixed-navbar absolute right-0 bottom-0" variants={sidebar} />
      <Navigation isOpen={isOpen} toggle={() => toggleOpen()}/>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
    </>
  )
}
