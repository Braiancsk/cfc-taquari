import { GetStaticPaths, GetStaticProps } from 'next'
import { createClient } from 'prismicio'
import React from 'react'

const index = () => {
  return (
    <main className='bg-slate-200'>
        <h1>Meu blog single</h1>
    </main>
  )
}

export default index

export const getStaticPaths: GetStaticPaths = async () => {
    const client = createClient()
    const posts = await client.getAllByType('posts')
    posts.map((post) => console.log(post.uid))
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
    const {uid} = params as any

    const props = await client.getByUID('posts', uid)

    return {
        props: {

        }
    }
}
