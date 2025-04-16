import type { FC } from 'react';
import { clsx } from 'clsx';

interface Props {
  className?: string;
}

export const PriceAndLogo: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('mb-4', className)}>
      <h2 className="text-3xl font-bold">750 000 ₽</h2>
      <div className="mt-2 flex items-center space-x-2">
        <div className="h-6 w-6 rounded-full bg-green-500"></div>
        <div className="h-6 w-6 rounded-full bg-blue-500"></div>
        <div className="h-6 w-6 rounded-full bg-yellow-500"></div>
      </div>
    </div>
  );
};
