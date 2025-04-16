import type { FC } from 'react';
import { clsx } from 'clsx';
import { Button } from 'antd';
import { MessageOutlined, PhoneOutlined } from '@ant-design/icons';

interface Props {
  className?: string;
}

export const UserActions: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('space-y-2', className)}>
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
  );
};
