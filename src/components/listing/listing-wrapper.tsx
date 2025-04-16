import type { FC } from 'react';
import { clsx } from 'clsx';
import { Container } from '../shared';
import { ListingTitle, MainContent } from './components';

interface Props {
  className?: string;
}

export const ListingWrapper: FC<Props> = ({ className }) => {
  return (
    <Container tag="section" className={clsx('px-4 py-2', className)}>
      <ListingTitle />
      <MainContent />
    </Container>
  );
};
