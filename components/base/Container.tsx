import React from 'react';
import { twMerge } from 'tailwind-merge';

type ContainerProps = {
  children: any;
  className?: string;
  left?: any;
  right?: any;
};

const Container = (props: ContainerProps) => {
  return (
    <div className="flex gap-6">
      <div className="flex grow items-center">{props.left}</div>
      <div className={twMerge('mx-auto w-full max-w-5xl py-6', props.className)}>{props.children}</div>
      <div className="flex grow items-center">{props.right}</div>
    </div>
  );
};

export default Container;
