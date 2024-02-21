import Container from '../../components/posts/container'
import MoreStories from '../../components/posts/more-stories'
import Intro from '../../components/posts/intro'
import Layout from '../../components/posts/layout'
import { getAllPosts } from '../../lib/blogAPI'
import Head from 'next/head'
import Post from '../../interfaces/post'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
        <title>{`Home `}</title>
        </Head>
        <Container>
          <Intro />
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
