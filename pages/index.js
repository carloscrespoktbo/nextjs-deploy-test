import Head from 'next/head'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'


export default function Home() {

  const [state, setState] = useState({
    header:'Header',
    main:'Main',
    footer:'Footer'
  });

  useEffect(()=>{
    setState({
      header:'.Header',
      main:'.Main',
      footer:'.Footer'
    })
  },[])

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>
          {state.header}
        </h1>
      </header>

      <main className={styles.main}>
          <h1>
          {state.main}
          </h1>
          <h2>
          <Link href="/productos">
            <a>Go to /productos</a>
          </Link>
        </h2>
      </main>

      <footer className={styles.footer}>
        <h1>
        {state.footer}
        </h1>
      </footer>
    </Layout>
  )
}
