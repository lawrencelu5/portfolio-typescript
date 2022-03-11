import Link from 'next/link'
import React from 'react'

const Header = () => {
  const NAV_ITEMS = ['About', 'Skills', 'Work', 'Contact']

  return (
    <div className="flex justify-end">
      <nav className="grid grid-flow-col gap-12 text-2xl">
        {NAV_ITEMS.map((item, i) => {
          return (
            <Link href={'#' + item}>
              <a className="hover:scale-125">{item}</a>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default Header
