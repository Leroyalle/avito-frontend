'use client';
import { useState, type FC } from 'react';
import { clsx } from 'clsx';
import { Button } from 'antd';
import {
  ArrowDownOutlined,
  FilterOutlined,
  TableOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { FiltersModal } from './components';
import { FindAllFiltersQuery } from '@/graphql/__generated__/output';
import { useAtom, useSetAtom } from 'jotai';
import { filtersAtom, initialFilters } from '@/store/filters-atom';
import { viewModeAtom } from '@/store/view-mode-atom';

interface Props {
  items: FindAllFiltersQuery['findAllFilters'];
  className?: string;
}

export const FiltersFactory: FC<Props> = ({ items, className }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const setFilters = useSetAtom(filtersAtom);
  const [viewMode, setViewMode] = useAtom(viewModeAtom);

  return (
    <div className={clsx('mb-4 flex flex-wrap items-center gap-2', className)}>
      <Button
        variant="outlined"
        className="flex items-center gap-2"
        onClick={() => setIsOpenModal(true)}>
        <FilterOutlined size={20} />
        Фильтры
      </Button>
      <Button
        variant="outlined"
        className="flex items-center gap-2"
        onClick={() => setFilters(initialFilters)}>
        <ArrowDownOutlined size={20} />
        По умолчанию
      </Button>
      <div className="ml-auto flex items-center gap-2">
        <Button
          variant="outlined"
          color={viewMode === 'grid' ? 'primary' : 'default'}
          className="h-9 w-9"
          onClick={() => setViewMode('grid')}>
          <TableOutlined size={20} />
        </Button>
        <Button
          variant="outlined"
          color={viewMode === 'list' ? 'primary' : 'default'}
          className="h-9 w-9 bg-gray-100"
          onClick={() => setViewMode('list')}>
          <UnorderedListOutlined size={20} />
        </Button>
      </div>
      <FiltersModal items={items} isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </div>
  );
};
