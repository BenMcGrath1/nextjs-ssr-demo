import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SSR with Next </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pre-Rendering Demo with <a href="https://nextjs.org/">Next.js</a>
        </h1>
        <nav className={styles.nav}>
          <Link href="albums/csr-app">
            <a>Go to CSR</a>
          </Link> 
          <Link href="albums/ssr-app">
            <a>Go to SSR</a>
          </Link>
          <Link href='albums/ssg-app'>
            <a>Go to SSG </a>
          </Link>
        </nav>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
