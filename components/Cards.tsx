import React from 'react'

const Cards = () => {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <img src="./images/project1.png" />
      <div className="space-x-6 space-y-6 bg-white">
        <div className="mb-2 text-xl font-bold text-gray-700">
          The Coldest Sunset
        </div>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  )
}

export default Cards
