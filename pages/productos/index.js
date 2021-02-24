
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Productos() {
  return (
    <Layout>
      <Head>
        <title>Create Next App | Productos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
          Productos
      </h1>
      <h2>
        <Link href="/productos/01">
          <a>Go to /01</a>
        </Link>
      </h2>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}