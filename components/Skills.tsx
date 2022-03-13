import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { setTarget } from 'framer-motion/types/render/utils/setters'

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
    <div className="flex flex-col">
      <h1 className="font-serif text-5xl">My Skills</h1>
      <div className="m-10 flex flex-wrap items-center justify-center gap-6">
        {SKILLS_SET.map((element, i) => {
          return (
            <motion.a
              href={element.href}
              whileHover={{
                scale: 1.1,
                opacity: 0.8,
                transition: { duration: 0.2 },
              }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="relative w-40"
              target="_blank"
            >
              <span className="cursor-pointer">
                <img src={'./images/' + element.img} />
              </span>
            </motion.a>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
