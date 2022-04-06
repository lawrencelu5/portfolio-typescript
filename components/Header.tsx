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
      name: 'Projects',
      href: 'projects',
    },
    {
      name: 'Contact',
      href: 'contact',
    },
  ]

  return (
    <div className="sticky top-0 z-50 flex justify-end bg-gray-700 py-3 text-white drop-shadow-lg">
      <div className="mr-6 box-border p-3">
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
    </div>
  )
}

export default Header
