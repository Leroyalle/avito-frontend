import type { FC } from 'react';
import { clsx } from 'clsx';
import { Button } from 'antd';
import { SnippetsOutlined } from '@ant-design/icons';

interface Props {
  totalListings: number;
  className?: string;
}

export const UserProfileActions: FC<Props> = ({ totalListings, className }) => {
  return (
    <div className={clsx('mt-4 space-y-2', className)}>
      <Button variant="outlined" className="w-full justify-between">
        {totalListings} объявления пользователя
        <SnippetsOutlined size={16} />
      </Button>
      <Button variant="outlined" className="w-full">
        Подписаться на продавца
      </Button>
    </div>
  );
};
