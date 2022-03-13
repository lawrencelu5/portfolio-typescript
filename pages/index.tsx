import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header, Intro, Skills } from '../components'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto flex flex-col space-y-48">
      <div className="box-border h-32 p-4">
        <Header />
      </div>
      <Intro />
      <Skills />
    </div>
  )
}

export default Home
