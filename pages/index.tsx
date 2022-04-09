import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
  BackgroundImage,
  Header,
  Intro,
  Projects,
  Skills,
  Contact,
} from '../components'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto flex flex-col">
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default Home
