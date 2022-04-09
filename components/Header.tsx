import Link from 'next/link'
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const variants = {
  open: { opacity: [0, 1], x: [20, 0] },
  closed: { opacity: 0, x: '-100%' },
}

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false)

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
    <div className="sticky top-0 right-0 z-50 flex items-center justify-between bg-gray-700 p-6 py-3 text-white drop-shadow-lg">
      <motion.h1
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        className="items-center text-2xl"
      >
        <a href="#home">LLu</a>
      </motion.h1>
      <div className="container mx-auto mr-6 hidden flex-wrap justify-end p-2 px-4 lg:flex">
        <nav className="hidden grid-flow-col gap-12 text-2xl lg:visible lg:grid">
          {NAV_ITEMS.map((item, i) => {
            return (
              <Link href={'#' + item.href}>
                <a className="cursor-pointer rounded-lg px-3 py-2 hover:bg-gray-400 hover:text-slate-900">
                  {item.name}
                </a>
              </Link>
            )
          })}
        </nav>
      </div>
      <button
        type="button"
        className="rounded-lg fill-white p-2 hover:bg-slate-200 hover:fill-slate-500 focus:outline-none lg:hidden"
        onClick={() => setToggleNav(!toggleNav)}
      >
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </button>
      {toggleNav && (
        <motion.nav
          animate={toggleNav ? 'open' : 'closed'}
          variants={variants}
          transition={{ duration: 0.3 }}
          className="fixed top-20 right-0 flex flex-col items-center gap-12 bg-gray-700 py-6 px-6 text-2xl lg:hidden "
        >
          {NAV_ITEMS.map((item, i) => {
            return (
              <Link href={'#' + item.href}>
                <a className="cursor-pointer rounded-lg px-3 py-2 hover:bg-gray-400 hover:text-slate-900">
                  {item.name}
                </a>
              </Link>
            )
          })}
        </motion.nav>
      )}
    </div>
  )
}

export default Header
