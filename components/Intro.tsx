import React from 'react'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <section className="flex h-screen min-h-screen flex-row flex-wrap items-center justify-around lg:justify-between">
      <div className="space-y-4">
        <p className="text-2xl text-neutral-400">Hey, my name is</p>
        <motion.h1
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="text-8xl text-blue-200"
        >
          Lawrence Lu
        </motion.h1>
        <h2 className="text-4xl">and I like to build apps.</h2>
        <p className="container-md text-xl text-neutral-300">
          I'm a junior developer exploring all sides of development. <br /> I
          also like to learn about new technologies, or play video games in my
          spare time.
        </p>
      </div>
      <motion.div
        className="items-center"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <img src="./images/avatar_placeholder.png" />
      </motion.div>
    </section>
  )
}

export default Intro
