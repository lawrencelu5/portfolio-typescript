import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { setTarget } from 'framer-motion/types/render/utils/setters'
import Title from './Title'

const Skills = () => {
  const SKILLS_SET = [
    {
      img: 'html5.svg',
      href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      img: 'css3.svg',
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    { img: 'javascript.svg', href: 'https://www.javascript.com/' },
    { img: 'reactjs.svg', href: 'https://reactjs.org/' },
    { img: 'nodejs-icon.svg', href: 'https://nodejs.org/' },
    { img: 'android.svg', href: 'https://developer.android.com/' },
  ]

  return (
    <section id="skills" className="flex flex-col py-16">
      <Title title="My Skills" />
      <div className="m-10 flex flex-row flex-wrap items-center justify-center gap-6 pt-16">
        {SKILLS_SET.map((element, i) => {
          return (
            <motion.a
              key={i}
              href={element.href}
              className="lg:basis-1/8 relative basis-3/12 md:basis-44"
              target="_blank"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { when: 'beforeChildren', delay: i * 0.3 },
                },
                hidden: { opacity: 0, y: 30 },
              }}
            >
              <span className="cursor-pointer">
                <img src={'./images/' + element.img} />
              </span>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
