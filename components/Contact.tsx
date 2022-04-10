import React from 'react'
import Title from './Title'
import { motion } from 'framer-motion'

const Contact = () => {
  const CONTACT_US = [
    {
      img: 'github-icon.svg',
      text: 'GitHub',
      href: 'https://github.com/lawrencelu5',
    },
    {
      img: 'linkedin-icon.svg',
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lawrencelu18/',
    },
    {
      img: 'google-gmail.svg',
      text: 'Mail Me',
      href: 'mailto:lawrencelu18@gmail.com',
    },
  ]

  return (
    <section className="flex flex-col py-16">
      <Title title="Get in touch" />
      <div className="flex flex-row justify-around py-12">
        {CONTACT_US.map((element, i) => {
          return (
            <motion.a
              target="_blank"
              href={element.href}
              className="space-between flex items-center p-4 md:border md:border-black"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { when: 'beforeChildren', delay: i * 0.3 },
                },
                hidden: { opacity: 0, y: 30 },
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <span>
                <img
                  className="mr-2 w-24 md:w-8"
                  src={'images/' + element.img}
                />
              </span>
              <span className="hidden text-xl md:flex">{element.text}</span>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}

export default Contact
