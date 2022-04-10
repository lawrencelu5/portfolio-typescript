import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Title from './Title'
import Cards from './Cards'

interface Data {
  name: string
  description: string
  url: string
  skills: string[]
}

const ProjectsAPIHandler = () => {
  const [projects, setProjects] = useState<Data>()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('api/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!projects) return <p>No projects to show!</p>

  return (
    <Cards
      projectName={projects.name}
      description={projects.description}
      gitHubLink={projects.url}
      skills={projects.skills}
    />
  )
}

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col py-16">
      <Title title="My Projects" />
      <div className="m-10 flex flex-wrap items-center justify-center gap-6">
        <ProjectsAPIHandler />
      </div>
    </section>
  )
}

export default Projects
