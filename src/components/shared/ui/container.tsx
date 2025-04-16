import type { ReactNode, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import React, { forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  tag?: 'div' | 'section' | 'article';
  className?: string;
}

export const Container = forwardRef<HTMLElement, Props>(
  ({ children, tag = 'div', className, ...props }, ref) => {
    return React.createElement(
      tag,
      {
        ref,
        className: clsx('container mx-auto p-2', className),
        ...props,
      },
      children,
    );
  },
);

Container.displayName = 'Container';
