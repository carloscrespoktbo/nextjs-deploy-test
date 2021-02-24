import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'

export default function Productos01() {
    return (
      <Layout>
        <Head>
          <title>Create Next App | Producto 01</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Productos 01</h1>
        <h2>
          <Link href="/productos">
            <a>Back to /productos</a>
          </Link>
        </h2>
      </Layout>
    )
}