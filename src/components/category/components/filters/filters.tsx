import type { FC } from 'react';
import { clsx } from 'clsx';
import { ActiveFilters, FiltersFactory } from './components';

interface Props {
  className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('container mx-auto px-4 py-4', className)}>
      <FiltersFactory />
      <ActiveFilters />
    </div>
  );
};
