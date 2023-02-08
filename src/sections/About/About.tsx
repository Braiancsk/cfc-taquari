import Image from 'next/image'
import React from 'react'

export const About = React.forwardRef((props,ref:any) => {
  return (
    <section ref={ref} id="sobre-nos">
        <h2 className='text-4xl font-semibold text-secondary text-center'>Sobre nós</h2>

        <div className="grid lg:grid-cols-2 gap-5 container mt-[67px]">
            <div>
                <Image src="/about-img.jpg" width={750} height={254} alt="Imagem do time do CFC Taquari"/>
            </div>
            <p className='text-[#1B1B1B]/80 font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui risus, cursus a semper a, imperdiet nec nisl. Nam tincidunt imperdiet eros, eu semper arcu congue luctus.
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui risus, cursus a semper a, imperdiet nec nisl. Nam tincidunt imperdiet eros, eu semper arcu congue luctus.
            </p>
        </div>
    </section>
  )
})
