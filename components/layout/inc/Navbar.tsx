import React from 'react';
import NavbarLink from '../../NavbarLink';

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
  return (
    <nav className="flex gap-6">
      <NavbarLink href="/">Home</NavbarLink>

      <NavbarLink href="/contact">Contact</NavbarLink>
    </nav>
  );
};

export default Navbar;
