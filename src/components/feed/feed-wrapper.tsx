'use client';
import type { FC } from 'react';
import { clsx } from 'clsx';
import {
  Categories,
  CategoriesSkeleton,
  QuickLinks,
  Recommendations,
  RecommendationsSkeleton,
  SearchSection,
} from './components';
import { useInfiniteScrollListings } from '@/hooks';
import { useFindAllCategoriesQuery } from '@/graphql/__generated__/output';

interface Props {
  className?: string;
}

export const FeedWrapper: FC<Props> = ({ className }) => {
  const { data: listings, cursor, isLoading: isLoadingListings } = useInfiniteScrollListings();
  const { data: categories, loading: isLoadingCategories } = useFindAllCategoriesQuery();

  return (
    <div className={clsx('', className)}>
      <SearchSection />
      <QuickLinks />
      {isLoadingCategories ? (
        <CategoriesSkeleton />
      ) : (
        <Categories items={categories?.findAllCategories ?? []} />
      )}
      {isLoadingListings ? (
        <RecommendationsSkeleton />
      ) : (
        <Recommendations items={listings?.findAllListings ?? []} />
      )}
      {cursor}
    </div>
  );
};
