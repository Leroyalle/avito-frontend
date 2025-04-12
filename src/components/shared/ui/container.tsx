import type { FC, ReactNode } from 'react';
import { clsx } from 'clsx';
import React from 'react';

interface Props {
  children: ReactNode;
  tag?: 'div' | 'section' | 'article';
  className?: string;
}

export const Container: FC<Props> = ({ children, tag = 'div', className }) => {
  return React.createElement(
    tag,
    {
      className: clsx('container mx-auto p-2', className),
    },
    children,
  );
};
