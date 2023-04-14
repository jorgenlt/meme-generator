import Head from 'next/head'
import Header from '@/pages/components/Header'
import Meme from '@/pages/components/Meme'

export default function Home() {
  return (
    <>
      <Head>
        <title>Meme Generator</title>
        <meta name="description" content="Meme Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="wrapper">
          <Header />
          <Meme />
        </div>
      </div>
    </>
  )
}
