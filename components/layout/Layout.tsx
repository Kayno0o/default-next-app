import React from 'react';
import { Footer } from './inc/Footer';
import { Header } from './inc/Header';

export type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="container mx-auto">{props.children}</div>
      <Footer />
    </div>
  );
}
