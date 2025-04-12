'use client';
import type { FC } from 'react';
import { clsx } from 'clsx';
import { Categories, QuickLinks, Recommendations, SearchSection } from './components';
import { useInfiniteScrollListings } from '@/hooks';

interface Props {
  className?: string;
}

export const FeedWrapper: FC<Props> = ({ className }) => {
  const { data: listings, cursor } = useInfiniteScrollListings();

  return (
    <div className={clsx('', className)}>
      <SearchSection />
      <QuickLinks />
      <Categories />
      <Categories />
      <Recommendations items={listings?.findAllListings ?? []} />
      {cursor}
    </div>
  );
};
