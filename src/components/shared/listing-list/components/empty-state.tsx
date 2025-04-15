import type { FC } from 'react';
import { Button, Empty } from 'antd';
import { useSetAtom } from 'jotai';
import { filtersAtom, initialFilters } from '@/store/filters-atom';

interface Props {
  className?: string;
}

export const EmptyState: FC<Props> = ({ className }) => {
  const setFilters = useSetAtom(filtersAtom);
  return (
    <Empty className={className}>
      <Button type="primary" onClick={() => setFilters(initialFilters)}>
        Сбросить фильтры
      </Button>
    </Empty>
  );
};
