import React from 'react';

export function Footer() {
  return (
    <footer className="w-full px-6 py-2 shadow-inner">
      <h1 className="text-right text-2xl">© blblbl - {new Date().getFullYear()}</h1>
    </footer>
  );
}
