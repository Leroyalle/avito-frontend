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

interface Props {
  className?: string;
}

export const FiltersFactory: FC<Props> = ({ className }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className={clsx('mb-4 flex flex-wrap items-center gap-2', className)}>
      <Button
        variant="outlined"
        className="flex items-center gap-2"
        onClick={() => setIsOpenModal(true)}>
        <FilterOutlined size={20} />
        Фильтры
      </Button>
      <Button variant="outlined" className="flex items-center gap-2">
        <ArrowDownOutlined size={20} />
        По умолчанию
      </Button>
      <div className="ml-auto flex items-center gap-2">
        <Button variant="outlined" className="h-9 w-9">
          <TableOutlined size={20} />
        </Button>
        <Button variant="outlined" className="h-9 w-9 bg-gray-100">
          <UnorderedListOutlined size={20} />
        </Button>
      </div>
      <FiltersModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </div>
  );
};
