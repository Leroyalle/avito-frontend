import type { FC } from 'react';
import { Button } from 'antd';
import { RightOutlined, SnippetsOutlined } from '@ant-design/icons';
import { PriceAndLogo, UserActions, UserBadges, UserInfo } from './components';

interface Props {
  className?: string;
}

export const RightContent: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="sticky top-4 rounded-lg bg-white p-4 shadow-md">
        <PriceAndLogo />
        <UserActions />
        <UserInfo />
        <UserBadges />

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
