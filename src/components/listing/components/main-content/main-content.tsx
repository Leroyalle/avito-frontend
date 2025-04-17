import type { FC } from 'react';
import { Container } from '@/components/shared';
import { LeftContent, RightContent } from './components';
import { FindListingByIdQuery } from '@/graphql/__generated__/output';

interface Props {
  listing: FindListingByIdQuery['findOneListing'];
  className?: string;
}

export const MainContent: FC<Props> = ({ listing, className }) => {
  return (
    <Container className={className}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <LeftContent listing={listing} />
        <RightContent listing={listing} />
      </div>
    </Container>
  );
};
