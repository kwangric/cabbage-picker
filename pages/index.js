import Game from '../components/Game'
import Head from 'next/head'
import styles from '../styles/Game.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cabbage Picker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Game />
    </div>
  )
}
