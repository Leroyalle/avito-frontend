'use client';
import type { FC } from 'react';
import { clsx } from 'clsx';
import { Categories, QuickLinks, Recommendations, SearchSection } from './components';
import { useInfiniteScrollListings } from '@/hooks';
import { Skeleton } from 'antd';

interface Props {
  className?: string;
}

export const FeedWrapper: FC<Props> = ({ className }) => {
  const { data: listings, cursor, isLoading } = useInfiniteScrollListings();

  return (
    <div className={clsx('', className)}>
      <SearchSection />
      <QuickLinks />
      <Categories />
      <Categories />
      {isLoading ? (
        <Skeleton active />
      ) : (
        <Recommendations items={listings?.findAllListings ?? []} />
      )}
      {cursor}
    </div>
  );
};
