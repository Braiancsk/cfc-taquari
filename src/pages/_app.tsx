import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from "../../prismicio"
import { Heading } from '@/components/Heading/Heading'

const inter = Inter({ subsets: ['latin'] })
// Create a client
const queryClient = new QueryClient()

const richTextComponents = {
  heading1:({children}:any) => {
    <Heading as="h2" size='3xl' className='mb-7 mt-12'>
      {children}
    </Heading>
  },
  heading2:({children}:any) => {
    <Heading as="h3" size='2xl' className='my-2'>
      {children}
    </Heading>
  },
  heading3:({children}:any) => {
    <Heading as="h4" size="2xl" className='my-2'>
      {children}
    </Heading>
  },
  paragraph:({children}:any) => {
    <p className='text-title mb-4'>
      {children}
    </p>
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
    <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
        <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
          <PrismicPreview repositoryName={repositoryName}>
            <Component {...pageProps} />
          </PrismicPreview>
        </PrismicProvider>
    </QueryClientProvider>
  )
}
