import type { FC } from 'react';
import { clsx } from 'clsx';
import { Categories, QuickLinks, SearchSection } from './components';

interface Props {
  className?: string;
}

export const FeedWrapper: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('', className)}>
      <SearchSection />
      <QuickLinks />
      <Categories />
      <Categories />
    </div>
  );
};
