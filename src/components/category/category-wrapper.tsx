import type { FC } from 'react';
import { clsx } from 'clsx';
import { Breadcrumb, Pagination } from 'antd';
import { Filters, Subcategories } from './components';

interface Props {
  className?: string;
}

export const CategoryWrapper: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('', className)}>
      <Breadcrumb items={[{ title: 'Авто' }]} />
      <Subcategories />
      <Filters />
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
};
