import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container} style={{background: "url(./forestbridge.jpg)", backgroundSize: "cover"}}>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Coming Soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="#" style={{color:"#fff"}}>UNDER CONSTRUCTION</a>
        </h1>
      </main>
    </div>
  )
}

export default Home
