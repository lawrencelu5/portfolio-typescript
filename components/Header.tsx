import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

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
    <div className="sticky top-0 z-50 justify-between bg-gray-700 py-3 text-white drop-shadow-lg">
      <div className="container mx-auto mr-6 flex flex-wrap justify-end p-2 px-4">
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
        <button
          type="button"
          className="ml-3 rounded-lg fill-white p-2 hover:bg-slate-200 hover:fill-slate-500 lg:hidden"
          onClick={() => setToggleNav(!toggleNav)}
        >
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </button>
      </div>
      {toggleNav && (
        <nav className="flex flex-col justify-center gap-12 text-2xl lg:hidden">
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
      )}
    </div>
  )
}

export default Header
