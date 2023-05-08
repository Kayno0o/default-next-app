import React from 'react';
import Link from 'next/link';
import Container from '../../base/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, faTimes } from '@fortawesome/free-solid-svg-icons';
import { twMerge } from 'tailwind-merge';
import BaseLink from '../../base/BaseLink';

const Header = () => {
  const [burger, setBurger] = React.useState(false);

  return (
    <header className="fixed z-10 w-full border-b border-amber-300 bg-black">
      <Container className="flex flex-wrap items-center gap-6 px-0 py-2 md:gap-12">
        <button
          onClick={() => setBurger(!burger)}
          onKeyDown={(event) => event.key === 'Enter' && setBurger(!burger)}
          className="h-8 w-8 md:hidden"
        >
          <FontAwesomeIcon icon={burger ? faTimes : faBurger} className="h-8 w-8" />
        </button>

        <Link href="/" className="text-2xl font-bold">
          Kayn.ooo
        </Link>

        <nav
          className={twMerge(
            'grow flex-col gap-6 md:flex md:flex-row',
            burger ? 'flex basis-full items-center md:basis-[initial] md:text-left' : 'hidden',
          )}
        >
          <BaseLink onClick={() => setBurger(false)} href="/">
            Home
          </BaseLink>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
