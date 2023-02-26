import { HeaderLink } from '@/components/Header/HeaderLink/HeaderLink'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CaretCircleLeft, CaretCircleUp } from 'phosphor-react'
import { createClient } from 'prismicio'
import { PrismicRichText } from '@prismicio/react'
import React, { useEffect, useState } from 'react'
import { Footer } from '@/sections/Footer/Footer'
import { AsidePost } from '@/components/AsidePost/AsidePost'
import { MobileHeader } from '@/components/MobileHeader/MobileHeader'


const Index = ({post,lastPosts}:any) => {
  const router = useRouter()
  const [windowWidth, setWindowWidth] = useState<null | number>(null);

    useEffect(() => {
      setWindowWidth(window.innerWidth);
    }, []);

    function scrollToTop(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

  return (
    <main className='bg-slate-200 min-h-screen'>
  {windowWidth! <= 1023 ? (<MobileHeader mobileLogo='dark'/>) : (<header className=''>
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
        
        </header>)}
        
        <section className='container flex lg:flex-row flex-col gap-5 lg:gap-20 py-10'>
          <div className='lg:max-w-[70%] w-full'>
 
          <button className="flex gap-1 items-center text-title font-semibold text-lg mb-4" onClick={() => router.push('/blog')}>
          <CaretCircleLeft color="#1b1b1b" size={32} weight="fill" />
            Voltar
          </button>

          <Image className='rounded-lg' src={post.data.imagem?.url} width={1280} height={400} alt={post.data.imagem.alt}/>

          <div className='my-5'>
          <time dateTime={post.last_publication_date} className='text-xs z-20'>{new Date(post.last_publication_date).toLocaleDateString("pt-BR")}</time>
          <h1 className='text-3xl text-title font-semibold'>{post.data.titulo}</h1>
          </div>

          <PrismicRichText field={post.data.conteudo} />
            
          </div>

          <aside className='w-full lg:max-w-[30%] lg:py-10'>
          <strong className='text-title text-sm block mb-5'>{lastPosts.lenght > 0 ? 'Últimas postagens' : 'Nenhuma outra postagem recente'}</strong>
          {lastPosts.map((post:any) => (
                <AsidePost
                key={post.uid}
                image={post.data.imagem.url}
                alt={post.data.imagem.alt}
                title={post.data.titulo}
                date={post.last_publication_date}
                url={post.url}
                />
            ))}
          </aside>
        </section>
        
        <div className='flex justify-center'>
        <button onClick={scrollToTop} className='my-10'><CaretCircleUp size={50} weight="fill" color="#FFB804" /></button>
        </div>

        <Footer/>
    </main>
  )
}

export default Index

export const getStaticPaths: GetStaticPaths = async () => {
    // const client = createClient()
    // const posts = await client.getAllByType('posts')
    // const params = posts.map((post) => post.uid)
   
    return {
        // Only `/posts/1` and `/posts/2` are generated at build time
        paths: [],
        // Enable statically generating additional pages
        // For example: `/posts/3`
        fallback: 'blocking',
      }
}

export const getStaticProps: GetStaticProps = async ({params, previewData}) => {
    const client = createClient({ previewData })
    const uid = params?.uid as string

    const post = await client.getByUID('posts', uid)
    const posts = await client.getAllByType('posts')
    const lastPosts = posts.filter(item => item.data.titulo !== post.data.titulo).slice(0,5)
    console.log(post)
    return {
        props: {
         post: post,
         lastPosts:lastPosts
        }
    }
}
