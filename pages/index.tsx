import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BackgroundImage, Header, Intro, Projects, Skills } from '../components'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col">
        <Header />
        <Intro />
        <Skills />
        <Projects />
      </div>
    </div>
  )
}

export default Home
