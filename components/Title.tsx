import React from 'react'

interface HeaderTitle {
  title: string
}

const Title: React.FC<HeaderTitle> = ({ title }) => {
  return <h1 className="text-5xl">{title}</h1>
}

export default Title
