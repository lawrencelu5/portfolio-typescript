import React from 'react'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-around space-y-8">
      <div className="space-y-4">
        <p className="text-2xl text-neutral-400">Hey, my name is</p>
        <h1 className="text-8xl text-blue-200">Lawrence Lu</h1>
        <h2 className="text-4xl">I like to build apps.</h2>
        <p className="text-xl text-neutral-300">
          I'm a junior developer exploring all sorts of development. <br /> I
          also like to learn about new technologies, or play video games in my
          spare time.
        </p>
      </div>
      <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
        <img src="./images/avatar_placeholder.png" />
      </motion.div>
    </div>
  )
}

export default Intro
