import React from 'react';
import BaseLink from '../../base/BaseLink';
import { twMerge } from 'tailwind-merge';

type NavBarProps = {
  burger: boolean;
  setBurger: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = (props: NavBarProps) => {
  return (
    <nav
      className={twMerge(
        'grow flex-col gap-6 md:flex md:flex-row',
        props.burger ? 'flex basis-full items-center md:basis-[initial] md:text-left' : 'hidden',
      )}
    >
      <BaseLink onClick={() => props.setBurger(false)} href="/">
        Home
      </BaseLink>
    </nav>
  );
};

export default NavBar;
