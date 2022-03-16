import React from 'react'
import { motion } from 'framer-motion'
import Title from './Title'
import Cards from './Cards'

const Projects = () => {
  return (
    <section className="flex flex-col">
      <Title title="My Projects" />
      <div className="m-10 flex flex-wrap items-center justify-center gap-6">
        <Cards />
      </div>
    </section>
  )
}

export default Projects
