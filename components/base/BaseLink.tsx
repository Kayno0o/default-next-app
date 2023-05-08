import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type BaseLinkProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
  onClick?: () => void;
};

const BaseLink = (props: BaseLinkProps) => {
  return (
    <Link
      href={props.href}
      className={twMerge('group relative w-fit font-bold text-amber-300', props.className)}
      onClick={props.onClick}
    >
      {props.children}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] w-full bg-amber-300 transition-all duration-300 group-hover:-bottom-1"></div>
    </Link>
  );
};

export default BaseLink;
