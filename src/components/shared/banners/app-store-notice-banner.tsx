import type { FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const AppStoreNoticeBanner: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('bg-gray-100 py-2 px-4 text-sm', className)}>
      <div className="container mx-auto flex items-center">
        <div className="flex items-center gap-2">
          <div className="flex">
            <span className="h-6 w-6 rounded-full bg-green-500"></span>
            <span className="h-6 w-6 rounded-full bg-cyan-500 -ml-2"></span>
            <span className="h-6 w-6 rounded-full bg-orange-500 -ml-2"></span>
          </div>
          <span>Авито недоступен в GooglePlay. Не удаляйте приложение.</span>
        </div>
        <Link href="#" className="ml-2 text-cyan-500">
          Подробнее
        </Link>
      </div>
    </div>
  );
};
