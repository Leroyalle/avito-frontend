import type { FC } from 'react';
import { clsx } from 'clsx';
import { Badge } from 'antd';
import { getSellerStatus } from '@/lib';

interface Props {
  reviews: { id: string; stars: number }[];
  className?: string;
}

export const UserBadges: FC<Props> = ({ className, reviews }) => {
  const status = getSellerStatus(reviews);

  if (!status) return null;

  return (
    <div className={clsx('mt-4 flex flex-wrap gap-2', className)}>
      <Badge className="rounded-md bg-gray-100">{status}</Badge>
    </div>
  );
};
