import Link from 'next/link';
import React, { ReactElement } from 'react';

type NavbarLinkProps = {
  children: ReactElement | string;
  href: string;
};

const NavbarLink = (props: NavbarLinkProps) => {
  return (
    <Link className="font-bold" href={props.href}>
      {props.children}
    </Link>
  );
};

export default NavbarLink;
