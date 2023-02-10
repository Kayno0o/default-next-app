import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full px-6 py-2 shadow-md">
      <div className="container mx-auto flex items-center gap-12">
        <Link href="/" className="text-2xl font-bold">
          Hello, World !
        </Link>

        <Navbar />
      </div>
    </header>
  );
}
