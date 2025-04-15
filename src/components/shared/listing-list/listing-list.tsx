'use client';
import type { FC } from 'react';
import { clsx } from 'clsx';
import { FindAllListingsQuery } from '@/graphql/__generated__/output';
import { EmptyState, ListingCard, Skeleton } from './components';
import { ViewMode } from '@/types';

interface Props {
  items: FindAllListingsQuery['findAllListings'];
  isLoading?: boolean;
  viewMode?: ViewMode;
  className?: string;
}

export const ListingList: FC<Props> = ({ items, isLoading, viewMode = 'grid', className }) => {
  if (isLoading) {
    return <Skeleton />;
  }

  if (!items.length) {
    return <EmptyState />;
  }

  return (
    <div
      className={clsx(
        viewMode === 'grid'
          ? 'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          : 'flex flex-col gap-4',
        className,
      )}>
      {items.map((item) => (
        <ListingCard key={item.id} item={item} viewMode={viewMode} />
      ))}
    </div>
  );
};
