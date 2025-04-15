import type { FC } from 'react';
import { clsx } from 'clsx';
import { ActiveFilters, FiltersFactory } from './components';
import { useFindAllFiltersQuery } from '@/graphql/__generated__/output';
import { Container } from '@/components/shared';

interface Props {
  className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
  const { data: allFilters, loading: filtersLoading } = useFindAllFiltersQuery();

  if (filtersLoading) {
    <Container className={clsx('px-4 py-4', className)}>Загрузка фильтров...</Container>;
  }

  return (
    <Container className={clsx('px-4 py-4', className)}>
      <FiltersFactory items={allFilters?.findAllFilters ?? []} />
      <ActiveFilters items={allFilters?.findAllFilters ?? []} />
    </Container>
  );
};
