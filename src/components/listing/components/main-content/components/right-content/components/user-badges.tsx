import type { FC } from 'react';
import { clsx } from 'clsx';
import { Badge } from 'antd';

interface Props {
  className?: string;
}

export const UserBadges: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('mt-4 flex flex-wrap gap-2', className)}>
      <Badge className="rounded-md bg-gray-100">Надёжный партнёр</Badge>
    </div>
  );
};
