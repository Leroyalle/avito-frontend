import type { FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { FindAllCategoriesQuery } from '@/graphql/__generated__/output';
import Image from 'next/image';

interface Props {
  items: FindAllCategoriesQuery['findAllCategories'];
  className?: string;
}

export const QuickLinks: FC<Props> = ({ items, className }) => {
  return (
    <div className={clsx('container mx-auto px-4 py-2', className)}>
      <div className="flex items-center space-x-4 overflow-x-auto text-sm">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/category/${item.slug}`}
            className="flex items-center rounded-full bg-gray-200 px-3 py-1">
            <Image
              src={item.image}
              alt={item.name}
              width={20}
              height={20}
              className="mr-2 h-5 w-5 object-cover rounded-full"
            />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
