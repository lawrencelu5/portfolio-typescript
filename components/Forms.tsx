import React from 'react'
import { motion } from 'framer-motion'

const Forms = () => {
  return (
    <form
      className="grid-cols grid rounded-lg bg-white p-12 drop-shadow-md"
      method="post"
    >
      <label className="block">
        <span className="text-xl text-gray-700">Full name</span>
        <input
          type="text"
          required
          className="mt-0 block w-full border-0 border-b-2 border-gray-300 px-0.5 focus:border-black focus:ring-0"
        />
      </label>
    </form>
  )
}

export default Forms
