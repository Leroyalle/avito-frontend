import type { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container: FC<Props> = ({ children, className }) => {
  return <div className={clsx('container mx-auto p-2', className)}>{children}</div>;
};
