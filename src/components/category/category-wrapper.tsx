'use client';
import type { FC } from 'react';
import { clsx } from 'clsx';
import { Breadcrumb, Pagination } from 'antd';
import { Filters, Subcategories } from './components';
import { Container, ListingList } from '../shared';
import { useSyncFiltersWithUrl, usePaginationListings } from '@/hooks';
import { filtersAtom } from '@/store/filters-atom';
import { useHydrateAtoms } from 'jotai/utils';
import { FiltersState } from '@/types';

interface Props {
  slug: string;
  queryFilters: FiltersState;
  className?: string;
}

export const CategoryWrapper: FC<Props> = ({ slug, queryFilters, className }) => {
  useHydrateAtoms([[filtersAtom, queryFilters]]);
  useSyncFiltersWithUrl();
  const { data: listings, setPage, page, loading: listingsLoading } = usePaginationListings(slug);

  return (
    <Container className={clsx('', className)}>
      <Breadcrumb items={[{ title: 'Главная', href: '/' }, { title: slug }]} />
      <Subcategories />
      <Filters />
      <ListingList
        items={listings?.findAllBySlugCategory ?? []}
        isLoading={listingsLoading}
        className="mb-6"
      />
      <Pagination defaultCurrent={page} current={page} total={50} onChange={setPage} />
    </Container>
  );
};
