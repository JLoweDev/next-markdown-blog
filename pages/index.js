import fs from 'fs'
import path from 'path'
import Head from 'next/head'


export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Hopeful Coder Blog</title>
      </Head>

      <h2>Temp</h2>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  console.log(files)

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    //Create slug
    const slug = filename.replace('.md', '')

    return {
      slug
    }
  })

  console.log(posts)

  return {
    props: {
      posts: 'The Posts',
    },
  }
}