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
      <Head>
        <title>Lawrence Lu</title>
        <meta name="description" content="Lawrence Lu" key="title" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="Lawrence, Lu, Lawrence Lu, web dev, developer, web developer, programmer"
        />
      </Head>
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
