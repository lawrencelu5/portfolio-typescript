import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const NAV_ITEMS = [
    {
      name: 'About',
      href: 'about',
    },
    {
      name: 'Skills',
      href: 'skills',
    },
    {
      name: 'Work',
      href: 'work',
    },
    {
      name: 'Contact',
      href: 'contact',
    },
  ]

  return (
    <div className="flex justify-end">
      <nav className="grid grid-flow-col gap-12 text-2xl">
        {NAV_ITEMS.map((item, i) => {
          return (
            <Link href={'#' + item.href}>
              <motion.a
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className="cursor-pointer"
              >
                {item.name}
              </motion.a>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default Header