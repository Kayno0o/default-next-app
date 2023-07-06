import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger, faTimes } from '@fortawesome/free-solid-svg-icons'
import Container from '../../base/Container'
import NavBar from './NavBar'

function Header() {
  const [burger, setBurger] = React.useState(false)

  return (
    <header className="fixed z-10 w-full border-b border-b-amber-300 bg-[inherit]">
      <Container className="flex flex-wrap items-center gap-6 px-0 py-2 md:gap-12">
        <button
          onClick={() => setBurger(!burger)}
          onKeyDown={event => event.key === 'Enter' && setBurger(!burger)}
          className="h-8 w-8 md:hidden"
        >
          <FontAwesomeIcon icon={burger ? faTimes : faBurger} className="h-8 w-8" />
        </button>

        <Link href="/" className="text-2xl font-bold">
          Kayn.ooo
        </Link>

        <NavBar burger={burger} setBurger={setBurger} />
      </Container>
    </header>
  )
}

export default Header
