import Head from 'next/head'
import { Header } from '@/components/Header/Header'
import { Courses } from '@/sections/Courses/Courses'
import { About } from '@/sections/About/About'
import { Depositions } from '@/sections/Depositions/Depositions'
import { Contact } from '@/sections/Contact/Contact'
import { Footer } from '@/sections/Footer/Footer'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { api } from '@/services/api'
import { GetStaticProps } from 'next'
import { CoursesDataTypes } from '@/@types/CoursesDataTypes.types'
import { Blog } from '@/sections/Blog/Blog'
import { createClient } from 'prismicio'


export const getStaticProps: GetStaticProps<{ courses: CoursesDataTypes[] }> = async (
  {previewData}
) => {
  const {data} = await api.get('/courses')
  const courses:CoursesDataTypes[] = data.courses
  const client = createClient({ previewData })

  const posts = await client.getAllByType('posts')

  return {
    props: {
      courses:courses,
      posts:posts.slice(0,4),
      revalidate: 60, // In seconds
    },
  }
}


export default function Home({courses,posts}:any) {

  const coursesRef = useRef<any>(null);
  const isCoursesInView = useInView(coursesRef,{amount:0.3});

  const aboutRef = useRef<any>(null);
  const isAboutInView = useInView(aboutRef,{amount:1});

  const depositionsRef = useRef<any>(null);
  const isDepositionsInView = useInView(depositionsRef,{amount:1});

  const contactRef = useRef<any>(null);
  const isContactInView = useInView(contactRef,{amount:0.8});

  const blogRef = useRef<any>(null);
  const isBlogInView = useInView(blogRef,{amount:0.8});


  return (
    <>
      <Head>
        <title>CFC Taquari</title>
        <meta name="description" content="No Centro de Formação de Condutores Taquari você possui alto grau de qualidade para fazer sua habilitação." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
      <Header
      coursesActive={isCoursesInView}
      aboutActive={isAboutInView}
      depositionsActive={isDepositionsInView}
      contactActive={isContactInView}
      blogActive={isBlogInView}
      />

        <Courses ref={coursesRef} courses={courses}/>

        <About ref={aboutRef}/>

        <Depositions ref={depositionsRef}/>

        <Contact ref={contactRef}/>

        <Blog ref={blogRef} posts={posts}/>

        <Footer/>
      </main>
    </>
  )
}
