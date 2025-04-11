import type { FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface Props {
  className?: string;
}

export const SearchSection: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('container mx-auto px-4 py-4', className)}>
      <div className="flex items-center">
        <Link href="/" className="mr-4 flex items-center">
          <div className="flex">
            <span className="h-8 w-8 rounded-full bg-green-500"></span>
            <span className="h-8 w-8 rounded-full bg-cyan-500 -ml-2"></span>
            <span className="h-8 w-8 rounded-full bg-orange-500 -ml-2"></span>
          </div>
          <span className="ml-2 text-2xl font-bold">Avito</span>
        </Link>

        <div className="flex flex-1 items-center">
          <Button
            variant="outlined"
            className="rounded-l-md rounded-r-none border-r-0 bg-cyan-500 text-white hover:bg-cyan-600 hover:text-white">
            <SearchOutlined className="mr-2 h-4 w-4" size={16} />
            Все категории
          </Button>
          <Input
            type="text"
            placeholder="Поиск по объявлениям"
            className="rounded-none border-x-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button className="rounded-l-none rounded-r-md bg-cyan-500 hover:bg-cyan-600">
            Найти
          </Button>
          <div className="ml-4 flex items-center text-sm">Во всех регионах</div>
        </div>
      </div>
    </div>
  );
};
