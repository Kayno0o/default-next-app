import React from 'react';

export function Footer() {
  return (
    <footer className="w-full px-6 py-2 shadow-inner">
      <h1 className="text-2xl text-right">© blblbl - {new Date().getFullYear()}</h1>
    </footer>
  );
}
