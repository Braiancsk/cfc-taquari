import { HeaderLink } from '@/components/Header/HeaderLink/HeaderLink'
import { HighlightPost } from '@/components/HighlightPost/HightLightPost'
import { PostCard } from '@/components/PostCard/PostCard'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { createClient } from 'prismicio'
import React from 'react'


export const getStaticProps: GetStaticProps = async ({previewData}) => {
    const client = createClient({ previewData })

    const posts = await client.getAllByType('posts')
    posts.map(post => console.log(post.data.conteudo))
    return {
        props: {
            posts: posts
        }
    }
}

const index = ({posts}:any) => {
  return (
    <main className='bg-slate-200 min-h-screen'>
        <header className=''>
        <div className="container flex items-center justify-between py-6">
                <Image
                  src="/logo-dark.png"
                  width={194}
                  height={41}
                  alt="Logo da empresa CFC Taquari"
                />
                    <nav className="container flex gap-[10px] items-center text-white my-2">
              <HeaderLink borderColorClass='border-slate-300' linkColor='#1b1b1b' active={false} text="INÍCIO" link="/#inicio"/>
              <HeaderLink borderColorClass='border-slate-300' linkColor='#1b1b1b' active={false} text="CURSOS" link="/#cursos"/>
              <HeaderLink borderColorClass='border-slate-300' linkColor='#1b1b1b' active={false} text="SOBRE NÓS" link="/#sobre-nos"/>
              <HeaderLink borderColorClass='border-slate-300' linkColor='#1b1b1b' active={false} text="DEPOIMENTOS" link="/#depoimentos"/>
              <HeaderLink borderColorClass='border-slate-300' linkColor='#1b1b1b' active={false} text="CONTATO" link="/#contato"/>
              <HeaderLink borderColorClass='border-slate-300' linkColor='#1b1b1b' active={true} text="BLOG" link="/blog"/>
              </nav>
                </div>
        
        </header>
              
        <section className='text-center my-5'>
        <h1 className='text-4xl font-semibold mb-2'>Blog</h1>
        <p>Veja nossos posts sobre o mundo do trânsito e as notícias mais importantes</p>
        </section>

        <section className='container'>
            <HighlightPost
            image={posts[0].data.imagem.url}
            alt={posts[0].data.imagem.alt}
            title={posts[0].data.titulo}
            date={posts[0].last_publication_date}
            previewDescription={posts[0].data.descricaoprevia}
            url={posts[0].url}
            />
        </section>
   

        <section className='my-5 container gap-7 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {posts.map((post:any) => (
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
    </main>
  )
}

export default index
