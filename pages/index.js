import Game from '../components/Game'
import Head from 'next/head'
import styles from '../styles/Game.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cabbage Picker</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Cabbage Picker" />
        <meta name="description" content="A simple cabbage picking game."/>
        <meta property="og:description" content="A simple cabbage picking game." />
        <meta property="og:type" content="article" />
      </Head>
      <Game />
    </div>
  )
}
