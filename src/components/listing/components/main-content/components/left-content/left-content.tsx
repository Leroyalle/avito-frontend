import type { FC } from 'react';
import { clsx } from 'clsx';
import { Characteristics, ImageGallery, ListingActions } from './components';
import { FindListingByIdQuery } from '@/graphql/__generated__/output';

interface Props {
  listing: FindListingByIdQuery['findOneListing'];
  className?: string;
}

export const LeftContent: FC<Props> = ({ listing, className }) => {
  return (
    <div className={clsx('lg:col-span-2', className)}>
      <ImageGallery items={listing.images} name={listing.name} />
      <ListingActions />
      <Characteristics />
    </div>
  );
};
