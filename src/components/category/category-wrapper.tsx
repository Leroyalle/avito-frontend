'use client';
import type { FC } from 'react';
import { clsx } from 'clsx';
import { Breadcrumb, Pagination } from 'antd';
import { Filters, Subcategories } from './components';
import { Container, ListingList } from '../shared';
import { usePaginationListings } from '@/hooks';
import { filtersAtom, initialFilters } from '@/store/filters-atom';
import { useHydrateAtoms } from 'jotai/utils';

interface Props {
  slug: string;
  page: number;
  className?: string;
}

export const CategoryWrapper: FC<Props> = ({ slug, page, className }) => {
  useHydrateAtoms([[filtersAtom, { ...initialFilters, page }]]);
  const { data: listings, setPage } = usePaginationListings(slug);

  return (
    <Container className={clsx('', className)}>
      <Breadcrumb items={[{ title: slug }]} />
      <Subcategories />
      <Filters />
      <ListingList items={listings?.findAllBySlugCategory ?? []} />
      <Pagination defaultCurrent={page} total={50} onChange={setPage} />
    </Container>
  );
};
