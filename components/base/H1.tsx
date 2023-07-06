import React from 'react'
import { twMerge } from 'tailwind-merge'

interface H1Props {
  children: React.ReactNode
  className?: string
}

function H1(props: H1Props) {
  return <h1 className={twMerge('text-4xl font-bold', props.className)}>{props.children}</h1>
}

export default H1
