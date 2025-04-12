'use client';
import type { FC } from 'react';
import { clsx } from 'clsx';
import { useFindAllListingsQuery } from '@/graphql/__generated__/output';
import { Categories, QuickLinks, Recommendations, SearchSection } from './components';

interface Props {
  className?: string;
}

export const FeedWrapper: FC<Props> = ({ className }) => {
  const { data: listings } = useFindAllListingsQuery();
  return (
    <div className={clsx('', className)}>
      <SearchSection />
      <QuickLinks />
      <Categories />
      <Categories />
      <Recommendations items={listings?.findAllListings ?? []} />
    </div>
  );
};
