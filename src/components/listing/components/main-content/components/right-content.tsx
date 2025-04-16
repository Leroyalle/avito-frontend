import type { FC } from 'react';
import Link from 'next/link';
import { Badge, Button } from 'antd';
import {
  MessageOutlined,
  PhoneOutlined,
  RightOutlined,
  SnippetsOutlined,
  StarOutlined,
} from '@ant-design/icons';

interface Props {
  className?: string;
}

export const RightContent: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="sticky top-4 rounded-lg bg-white p-4 shadow-md">
        <div className="mb-4">
          <h2 className="text-3xl font-bold">750 000 ₽</h2>
          <div className="mt-1 text-sm">
            <span className="text-gray-600">В кредит от 18 080 ₽/мес.</span>
            <Link href="#" className="ml-1 text-[var(--avito-primary)] hover:underline">
              Посмотреть предложения
            </Link>
          </div>
          <div className="mt-2 flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-green-500"></div>
            <div className="h-6 w-6 rounded-full bg-blue-500"></div>
            <div className="h-6 w-6 rounded-full bg-yellow-500"></div>
          </div>
        </div>

        <div className="space-y-2">
          <Button className="w-full bg-green-500 hover:bg-green-600">
            <PhoneOutlined className="mr-2" size={16} />
            Показать телефон
            <span className="ml-2 text-xs text-green-200">8 966 XXX-XX-XX</span>
          </Button>
          <Button variant="outlined" className="w-full">
            <MessageOutlined className="mr-2" size={16} />
            Написать сообщение
            <span className="ml-2 text-xs text-gray-500">Отвечает около 30 минут</span>
          </Button>
        </div>

        <div className="mt-4 flex items-center">
          <div className="mr-3 h-12 w-12 overflow-hidden rounded-full bg-yellow-100">
            <div className="flex h-full w-full items-center justify-center text-xl font-bold text-yellow-500">
              Р
            </div>
          </div>
          <div>
            <h3 className="font-medium">Роман</h3>
            <div className="flex items-center">
              <span className="mr-1">5.0</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarOutlined key={star} className="h-3 w-3 fill-yellow-400" />
                ))}
              </div>
              <span className="ml-1 text-sm text-gray-500">12 отзывов</span>
            </div>
            <p className="text-sm text-gray-600">Частное лицо</p>
            <p className="text-sm text-gray-600">На Авито с января 2011</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Badge className="rounded-md bg-gray-100">Надёжный партнёр</Badge>
          <Badge className="rounded-md bg-gray-100">Экокласс: ~162 тонн CO₂</Badge>
        </div>

        <div className="mt-4 space-y-2">
          <Button variant="outlined" className="w-full justify-between">
            2 объявления пользователя
            <SnippetsOutlined size={16} />
          </Button>
          <Button variant="outlined" className="w-full">
            Подписаться на продавца
          </Button>
        </div>

        <div className="mt-6">
          <h3 className="mb-2 font-medium">Спросите у продавца</h3>
          <div className="rounded-lg bg-gray-50 p-4">
            <div className="mb-2 flex">
              <div className="mr-2 rounded-full bg-gray-200 p-2">
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm">Здравствуйте!</p>
              </div>
              <div>
                <RightOutlined className="text-gray-400" size={16} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outlined" size="small" className="bg-gray-200 text-xs">
                Ещё продаёте?
              </Button>
              <Button variant="outlined" size="small" className="bg-gray-200 text-xs">
                Торг уместен?
              </Button>
              <Button variant="outlined" size="small" className="bg-gray-200 text-xs">
                Когда можно посмотреть?
              </Button>
              <Button variant="outlined" size="small" className="bg-gray-200 text-xs">
                Пришлёте видео?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
