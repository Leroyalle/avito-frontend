import type { FC } from 'react';
import { clsx } from 'clsx';
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

interface Props {
  className?: string;
}

export const ListingActions: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('mt-4 flex space-x-2', className)}>
      <Button variant="outlined" className="flex items-center">
        <HeartOutlined className="mr-2" size={16} />
        Добавить в избранное
      </Button>
      <Button variant="outlined" className="flex items-center">
        <svg
          className="mr-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        Сравнить
      </Button>
      <Button variant="outlined" className="flex items-center">
        <svg
          className="mr-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
        Добавить заметку
      </Button>
    </div>
  );
};
