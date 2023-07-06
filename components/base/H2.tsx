import React from 'react'
import { twMerge } from 'tailwind-merge'

interface H2Props {
  children: React.ReactNode
  className?: string
}

function H2(props: H2Props) {
  return <h2 className={twMerge('text-2xl font-bold', props.className)}>{props.children}</h2>
}

export default H2
