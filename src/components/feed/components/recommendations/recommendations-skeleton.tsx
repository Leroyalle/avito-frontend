import type { FC } from 'react';
import { clsx } from 'clsx';
import { Container } from '@/components/shared';
import { Skeleton } from 'antd';

interface Props {
  length?: number;
  className?: string;
}

export const RecommendationsSkeleton: FC<Props> = ({ length = 20, className }) => {
  return (
    <Container className={clsx('px-4 py-6', className)}>
      <div
        className={clsx(
          'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
          className,
        )}>
        {Array(length)
          .fill(0)
          .map((_, index) => (
            <Skeleton.Node key={index} active style={{ width: 300, height: 350 }} />
          ))}
      </div>
    </Container>
  );
};
