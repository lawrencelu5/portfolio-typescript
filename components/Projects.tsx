import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Title from './Title'
import Cards from './Cards'

const Projects = () => {
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    fetch('api/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data)
      })
  }, [])

  return (
    <section className="flex flex-col py-16">
      <Title title="My Projects" />
      <div className="m-10 flex flex-wrap items-center justify-center gap-6"></div>
      <Cards projectName={projects.name} />
    </section>
  )
}

export default Projects
