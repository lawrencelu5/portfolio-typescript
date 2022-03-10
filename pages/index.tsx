import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Intro } from '../components'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Intro />
    </div>
  )
}

export default Home
