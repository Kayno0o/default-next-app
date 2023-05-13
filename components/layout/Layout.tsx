import React, { ReactElement } from 'react';
import Footer from './inc/Footer';
import Header from './inc/Header';
import { twMerge } from 'tailwind-merge';

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps): ReactElement => {
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
  );
};

export default Layout;
