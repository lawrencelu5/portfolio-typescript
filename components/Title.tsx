import React from 'react'
import { motion } from 'framer-motion'

interface HeaderTitle {
  title: string
}

const Title: React.VoidFunctionComponent<HeaderTitle> = ({ title }) => {
  return (
    <motion.div
      className="flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -70 },
      }}
    >
      <h1 className="text-5xl">{title}</h1>
      <hr className="ml-8 w-1/4 border-black" />
    </motion.div>
  )
}

export default Title
