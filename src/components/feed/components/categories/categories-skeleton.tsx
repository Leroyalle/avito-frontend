import type { FC } from 'react';
import { clsx } from 'clsx';
import { Skeleton } from 'antd';
import { Container } from '@/components/shared';

interface Props {
  length?: number;
  className?: string;
}

export const CategoriesSkeleton: FC<Props> = ({ length = 12, className }) => {
  return (
    <Container className={(clsx('px-4 py-6'), className)}>
      <div
        className={clsx(
          'grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6',
          className,
        )}>
        {Array(length)
          .fill(0)
          .map((_, index) => (
            <Skeleton.Node key={index} active style={{ width: 160 }} />
          ))}
      </div>
    </Container>
  );
};
