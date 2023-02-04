import Head from 'next/head'
import Image from 'next/image'

import { Header } from '@/components/Header/Header'
import { Courses } from '@/sections/Courses/Courses'
import { About } from '@/sections/About/About'
import { Depositions } from '@/sections/Depositions/Depositions'



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>

        <Courses/>

        <About/>

        <Depositions/>
      </main>
    </>
  )
}
