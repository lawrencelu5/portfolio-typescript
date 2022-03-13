import React from 'react'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <div className="flex items-center justify-around">
      <div>
        <p className="text-2xl">Hey, my name is</p>
        <h1 className="text-7xl">Lawrence Lu</h1>
      </div>
      <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
        <img src="./images/avatar_placeholder.png" />
      </motion.div>
    </div>
  )
}

export default Intro
