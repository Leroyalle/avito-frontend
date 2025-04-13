import type { FC } from 'react';
import { clsx } from 'clsx';
import { FindAllListingsQuery } from '@/graphql/__generated__/output';
import { ListingCard } from './components';

interface Props {
  items: FindAllListingsQuery['findAllListings'];

  className?: string;
}

export const ListingList: FC<Props> = ({ items, className }) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
        className,
      )}>
      {items.map((item) => (
        <ListingCard key={item.id} item={item} />
      ))}
    </div>
  );
};
