import type { FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const QuickLinks: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('container mx-auto px-4 py-2', className)}>
      <div className="flex items-center space-x-4 overflow-x-auto text-sm">
        <Link href="#" className="flex items-center rounded-full bg-gray-200 px-3 py-1">
          <span className="mr-2">🏠</span>
          Жилье для поездки
        </Link>
        <Link href="#" className="flex items-center rounded-full bg-gray-200 px-3 py-1">
          <span className="mr-2">📖</span>
          Хорошие истории
        </Link>
        <Link href="#" className="flex items-center rounded-full bg-gray-200 px-3 py-1">
          <span className="mr-2">🛍️</span>
          Молл
        </Link>
        <Link href="#" className="flex items-center rounded-full bg-gray-200 px-3 py-1">
          <span className="mr-2">💇</span>
          Услуги для красоты
        </Link>
        <Link href="#" className="flex items-center rounded-full bg-gray-200 px-3 py-1">
          <span className="mr-2">🚗</span>
          Гараж
        </Link>
        <Link href="#" className="flex items-center rounded-full bg-gray-200 px-3 py-1">
          <span className="mr-2">🚘</span>
          Новые авто
        </Link>
      </div>
    </div>
  );
};
