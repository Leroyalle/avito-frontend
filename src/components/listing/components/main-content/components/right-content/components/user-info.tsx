import type { FC } from 'react';
import { clsx } from 'clsx';
import { StarOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

interface Props {
  name: string;
  registerAt: Date;
  totalReviews: number;
  userType: string;
  className?: string;
}

export const UserInfo: FC<Props> = ({ name, registerAt, totalReviews, userType, className }) => {
  return (
    <div className={clsx('mt-4 flex items-center', className)}>
      <div className="mr-3 h-12 w-12 overflow-hidden rounded-full bg-yellow-100">
        <div className="flex h-full w-full items-center justify-center text-xl font-bold text-yellow-500">
          Р
        </div>
      </div>
      <div>
        <h3 className="font-medium">{name}</h3>
        <div className="flex items-center">
          <span className="mr-1">5.0</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarOutlined key={star} className="h-3 w-3 fill-yellow-400" />
            ))}
          </div>
          <span className="ml-1 text-sm text-gray-500">{totalReviews} отзывов</span>
        </div>
        <p className="text-sm text-gray-600">{userType}</p>
        <p className="text-sm text-gray-600">На Авито с {dayjs(registerAt).format('DD.MM.YYYY')}</p>
      </div>
    </div>
  );
};
