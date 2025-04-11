import type { FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={clsx('bg-gray-800 text-white', className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-6 text-sm">
            <Link href="#" className="hover:text-cyan-400">
              Для бизнеса
            </Link>
            <Link href="#" className="hover:text-cyan-400">
              Карьера в Авито
            </Link>
            <Link href="#" className="hover:text-cyan-400">
              Помощь
            </Link>
            <div className="relative group">
              <Link href="#" className="flex items-center hover:text-cyan-400">
                Каталоги
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
            </div>
            <Link href="#" className="hover:text-cyan-400">
              #ЯПомогаю
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-cyan-400">
              <HeartOutlined size={20} />
            </Link>
            <Link href="#" className="hover:text-cyan-400">
              <ShoppingCartOutlined size={20} />
            </Link>
            <Link href="#" className="hover:text-cyan-400">
              Вход и регистрация
            </Link>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-md">
              Разместить объявление
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
