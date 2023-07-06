import type { ReactElement } from 'react'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import Footer from './inc/Footer'
import Header from './inc/Header'

export interface LayoutProps {
  children: React.ReactNode
}

function Layout(props: LayoutProps): ReactElement {
  return (
    <div
      className={twMerge(
        'flex min-h-[100svh] flex-col bg-slate-950 text-white',
        'focus-visible:all-child:outline-none focus-visible:all-child:ring-2 focus-visible:all-child:ring-amber-600',
      )}
    >
      <Header />

      <main className="mt-12">{props.children}</main>

      <Footer />
    </div>
  )
}

export default Layout
