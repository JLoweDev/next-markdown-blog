import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'


export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Hopeful Coder Blog</title>
      </Head>

      <div className="posts">
        {posts.map((post, index) => (
          <h3>{post.frontmatter.title}</h3>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const {data:frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  console.log(posts)

  return {
    props: {
      posts,
    },
  }
}