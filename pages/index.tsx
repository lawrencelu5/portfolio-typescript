import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header, Intro } from '../components'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className="box-border h-32 p-4">
        <Header />
      </div>
      <Intro />
    </div>
  )
}

export default Home
