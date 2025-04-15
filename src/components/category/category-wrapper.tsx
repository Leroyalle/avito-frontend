'use client';
import type { FC } from 'react';
import { clsx } from 'clsx';
import { Breadcrumb, Pagination } from 'antd';
import { Filters } from './components';
import { Container, ListingList } from '../shared';
import { useSyncFiltersWithUrl, usePaginationListings } from '@/hooks';
import { filtersAtom } from '@/store/filters-atom';
import { useHydrateAtoms } from 'jotai/utils';
import { FiltersState } from '@/types';
import { useAtomValue } from 'jotai';
import { viewModeAtom } from '@/store/view-mode-atom';

//FIXME: удалить // eslint-disable-next-line @typescript-eslint/no-explicit-any из output.ts

interface Props {
  slug: string;
  queryFilters: FiltersState;
  className?: string;
}

export const CategoryWrapper: FC<Props> = ({ slug, queryFilters, className }) => {
  useHydrateAtoms([[filtersAtom, queryFilters]]);
  const viewMode = useAtomValue(viewModeAtom);
  useSyncFiltersWithUrl();
  const { data: listings, setPage, page, loading: listingsLoading } = usePaginationListings(slug);

  return (
    <Container className={clsx('', className)}>
      <Breadcrumb items={[{ title: 'Главная', href: '/' }, { title: slug }]} />
      {/* <Subcategories /> */}
      <Filters />
      <ListingList
        items={listings?.findAllBySlugCategory ?? []}
        isLoading={listingsLoading}
        viewMode={viewMode}
        className="mb-6"
      />
      <Pagination defaultCurrent={page} current={page} total={50} onChange={setPage} />
    </Container>
  );
};
