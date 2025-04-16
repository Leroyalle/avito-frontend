import type { FC } from 'react';
import { Container } from '@/components/shared';
import { LeftContent, RightContent } from './components';

interface Props {
  className?: string;
}

export const MainContent: FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <LeftContent />
        <RightContent />
      </div>
    </Container>
  );
};
