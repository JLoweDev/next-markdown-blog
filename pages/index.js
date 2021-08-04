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
  

  return {
    props: {
      posts: 'The Posts',
    },
  }
}