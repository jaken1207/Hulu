import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hulu Clone App</title>
        <link rel="icon" href="/Hulu_ico.png" />
      </Head>

      <Header/>

      {/* Nav */}
      <Nav />

      {/* Result */}
    </>
  )
}
