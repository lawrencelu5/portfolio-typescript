import React from 'react'
import { motion } from 'framer-motion'

interface HeaderTitle {
  title: string
}

const Title: React.FC<HeaderTitle> = ({ title }) => {
  return (
    <motion.div
      className="flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }}
    >
      <h1 className="text-5xl">{title}</h1>
      <hr className="ml-8 w-1/4" />
    </motion.div>
  )
}

export default Title
