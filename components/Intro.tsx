import React from 'react'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <section className="flex h-screen min-h-screen flex-row flex-wrap items-center justify-around lg:justify-between">
      <div className="space-y-4">
        <p className="text-4xl">Hey, my name is</p>
        <motion.h1
          animate={{ opacity: [0, 1], x: [-20, 0] }}
          transition={{ duration: 0.5 }}
          className="text-9xl"
        >
          Lawrence Lu
        </motion.h1>
        <h2 className="text-5xl">and I like to build apps.</h2>
        <p className="container-md text-2xl">
          I'm a junior developer exploring all sides of development. <br /> I
          also like to learn about new technologies, or play video games in my
          spare time.
        </p>
      </div>
      <div>
        <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 6, ease: 'linear'}} className='bg-auto bg-center opacity-25' src='images/reactjs.svg'/>
      </div>
    </section>
  )
}

export default Intro
