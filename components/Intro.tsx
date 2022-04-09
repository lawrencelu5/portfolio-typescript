import React from 'react'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <section className="m-24 flex flex-row flex-wrap items-center justify-around lg:m-0 lg:min-h-screen">
      <div className="space-y-4">
        <p className="text-center text-2xl lg:text-4xl">Hey, my name is</p>
        <motion.h1
          animate={{ opacity: [0, 1], x: [-50, 0] }}
          transition={{ duration: 1 }}
          className="text-center text-5xl lg:text-9xl"
        >
          Lawrence Lu
        </motion.h1>
        <h2 className="text-center text-2xl lg:text-5xl">
          and I like to build apps.
        </h2>
        <p className="container-md text-center text-lg lg:text-2xl">
          I'm a junior developer exploring all sides of development. <br /> I
          also like to learn about new technologies, or play video games in my
          spare time.
        </p>
      </div>
      <div className="absolute lg:relative">
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
          className="opacity-10 lg:opacity-25"
          src="images/reactjs.svg"
        />
      </div>
    </section>
  )
}

export default Intro
