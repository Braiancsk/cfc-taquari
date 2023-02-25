import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Link from 'next/link'
import { PrismicLink, PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from "../../prismicio"
import { Heading } from '@/components/Heading/Heading'

const inter = Inter({ subsets: ['latin'] })
// Create a client
const queryClient = new QueryClient()

const richTextComponents = {
  heading1: ({ children }:any) => (
    <Heading as="h2" size="3xl" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading2: ({ children }:any) => (
    <Heading as="h3" size="2xl" className="mb-7 last:mb-0">
      {children}
    </Heading>
  ),
  heading3: ({ children }:any) => (
    <Heading as="h4" size="xl" className="mb-7 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }:any) => <p className="mb-7 last:mb-0">{children}</p>,
  oList: ({ children }:any) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }:any) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }:any) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }:any) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }:any) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }:any) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }:any) => (
    <PrismicLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicLink>
  ),
};


export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
    <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
        <PrismicProvider 
        internalLinkComponent={(props) => <Link {...props} />} 
        richTextComponents={richTextComponents}
        >
          <PrismicPreview repositoryName={repositoryName}>
            <Component {...pageProps} />
          </PrismicPreview>
        </PrismicProvider>
    </QueryClientProvider>
  )
}
