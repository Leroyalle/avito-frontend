import type { FC } from 'react';
import { clsx } from 'clsx';
import { Container } from '../shared';
import { ListingTitle, MainContent } from './components';
import { useFindListingByIdQuery } from '@/graphql/__generated__/output';

interface Props {
  listingId: string;
  className?: string;
}

export const ListingWrapper: FC<Props> = ({ listingId, className }) => {
  const { data: listing } = useFindListingByIdQuery({
    variables: {
      id: listingId,
    },
  });

  if (!listing) {
    return null;
  }

  return (
    <Container tag="section" className={clsx('px-4 py-2', className)}>
      <ListingTitle title={listing.findOneListing.name} />
      <MainContent listing={listing.findOneListing} />
    </Container>
  );
};
