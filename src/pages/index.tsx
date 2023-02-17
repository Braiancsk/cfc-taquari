import Head from 'next/head'
import Image from 'next/image'
import { Header } from '@/components/Header/Header'
import { Courses } from '@/sections/Courses/Courses'
import { About } from '@/sections/About/About'
import { Depositions } from '@/sections/Depositions/Depositions'
import { Contact } from '@/sections/Contact/Contact'
import { Footer } from '@/sections/Footer/Footer'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { api } from '@/services/api'
import { GetStaticPaths, GetStaticProps } from 'next'
import { CoursesDataTypes } from '@/@types/CoursesDataTypes.types'


export const getStaticProps: GetStaticProps<{ courses: CoursesDataTypes[] }> = async (
  context
) => {
  const {data} = await api.get('/courses')
  const courses:CoursesDataTypes[] = data.courses

  return {
    props: {
      courses:courses
    },
  }
}


export default function Home({courses}:any) {

  const coursesRef = useRef<any>(null);
  const isCoursesInView = useInView(coursesRef,{amount:0.3});

  const aboutRef = useRef<any>(null);
  const isAboutInView = useInView(aboutRef,{amount:1});

  const depositionsRef = useRef<any>(null);
  const isDepositionsInView = useInView(depositionsRef,{amount:1});

  const contactRef = useRef<any>(null);
  const isContactInView = useInView(contactRef,{amount:0.8});


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
      />

        <Courses ref={coursesRef} courses={courses}/>

        <About ref={aboutRef}/>

        <Depositions ref={depositionsRef}/>

        <Contact ref={contactRef}/>

        <Footer/>
      </main>
    </>
  )
}
