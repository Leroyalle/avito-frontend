import type { FC } from 'react';
import { clsx } from 'clsx';
import { Breadcrumb } from 'antd';
import { Subcategories } from './components';

interface Props {
  className?: string;
}

export const CategoryWrapper: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('', className)}>
      <Breadcrumb items={[{ title: 'Авто' }]} />
      <Subcategories />
    </div>
  );
};
