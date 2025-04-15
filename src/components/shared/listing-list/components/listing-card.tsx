import type { FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { HeartOutlined } from '@ant-design/icons';
import { FindAllListingsQuery } from '@/graphql/__generated__/output';
import { ViewMode } from '@/types';

interface Props {
  item: FindAllListingsQuery['findAllListings'][0];
  viewMode: ViewMode;
  className?: string;
}

export const ListingCard: FC<Props> = ({ item, viewMode, className }) => {
  if (viewMode === 'list') {
    return (
      <Link
        href={`/listing/${item.id}`}
        key={item.id}
        className={clsx(
          'flex items-center gap-4 rounded-lg bg-white p-4 shadow-md transition-all hover:shadow-lg',
          className,
        )}>
        <div className="relative h-32 w-48 flex-shrink-0 overflow-hidden rounded-md">
          <Image
            src={item.images[0]}
            alt="Chevrolet"
            width={192}
            height={128}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
          <button className="absolute right-2 top-2 rounded-full bg-white p-1.5 opacity-80 hover:opacity-100">
            <HeartOutlined className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-cyan-600">{item.name} 1.6 MT, 2011, 259 760 км</h3>
          <p className="text-lg font-bold">{item.price} ₽</p>
          <p className="text-sm text-gray-500">Москва, Новокосино</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/listing/${item.id}`}
      key={item.id}
      className={clsx(
        'group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg',
        className,
      )}>
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={item.images[0]}
          alt="Chevrolet"
          width={300}
          height={200}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <button className="absolute right-2 top-2 rounded-full bg-white p-1.5 opacity-80 hover:opacity-100">
          <HeartOutlined className="h-5 w-5" />
        </button>
      </div>
      <div className="p-3">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="font-bold text-cyan-600">{item.name} 1.6 MT, 2011, 259 760 км</h3>
        </div>
        <p className="text-lg font-bold">{item.price} ₽</p>
        <p className="text-sm text-gray-500">Москва, Новокосино</p>
      </div>
    </Link>
  );
};
