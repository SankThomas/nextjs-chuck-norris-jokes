import Head from 'next/head'
import moment from 'moment'
import styles from '../styles/Home.module.css'

export default function Home({ jokes }) {
  const { id, icon_url, url, value, created_at } = jokes

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs Random Jokes Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div key={id}>
          <div className={styles.grid}>
            <h1 className={styles.title}>Random Chuck Norris Jokes</h1>
            <img src={icon_url} alt={url} />
          </div>
          <p className={styles.description}>{value}</p>
          <p style={{ textAlign: 'center' }}>
            Created At:{' '}
            {moment(`${created_at}`).format('MMMM Do YYYY hh:mm:ss')}
          </p>
        </div>
        <button className={styles.button} onClick={() => location.reload()}>
          Next Joke
        </button>
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

// api link = https://api.chucknorris.io/jokes/random
export async function getStaticProps() {
  const res = await fetch(`https://api.chucknorris.io/jokes/random`)
  const jokes = await res.json()

  return {
    props: {
      jokes,
    },
  }
}
