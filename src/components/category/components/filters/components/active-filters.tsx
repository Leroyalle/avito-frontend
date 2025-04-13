import type { FC } from 'react';
import { clsx } from 'clsx';
import { Badge } from 'antd';

interface Props {
  className?: string;
}

export const ActiveFilters: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('mb-4 flex flex-wrap gap-2 items-center', className)}>
      <Badge className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
        Новые
        <button className="ml-1 text-gray-500 hover:text-gray-700">×</button>
      </Badge>
      <Badge className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
        С фото
        <button className="ml-1 text-gray-500 hover:text-gray-700">×</button>
      </Badge>
      <Badge className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
        Частные
        <button className="ml-1 text-gray-500 hover:text-gray-700">×</button>
      </Badge>
      <button className="text-sm text-[var(--avito-primary)] hover:underline">Сбросить все</button>
    </div>
  );
};
