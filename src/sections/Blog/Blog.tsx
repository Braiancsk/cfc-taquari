import { Button } from '@/components/Button/Button'
import { PostCard } from '@/components/PostCard/PostCard'
import Image from 'next/image'
import React from 'react'

export const Blog = React.forwardRef(({posts}:any,ref:any) => {
  return (
    <section ref={ref} id="blog">
        <h2 className='text-4xl font-semibold text-secondary text-center'>Blog</h2>

        <section className='my-5 container gap-7 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {posts?.map((post:any) => (
                <PostCard
                image={post.data.imagem.url}
                alt={post.data.imagem.alt}
                title={post.data.titulo}
                date={post.last_publication_date}
                previewDescription={post.data.descricaoprevia}
                url={post.url}
                />
            ))}
        </section>
        
        <div className='max-w-[300px] w-full mx-auto my-10'>
        <Button variant="secondary" text='Ver mais' href='/blog'/>
        </div>
    </section>
  )
})
