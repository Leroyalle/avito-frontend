import type { FC } from 'react';
import { clsx } from 'clsx';
import { Container } from '@/components/shared';
import Link from 'next/link';
import Image from 'next/image';
import { FindAllCategoriesQuery } from '@/graphql/__generated__/output';

interface Props {
  items: FindAllCategoriesQuery['findAllCategories'];
  className?: string;
}

export const Categories: FC<Props> = ({ items, className }) => {
  return (
    <Container className={(clsx('px-4 py-6'), className)}>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/category/${item.slug}`}
            className="flex flex-col items-center">
            <div className="mb-2 h-24 w-full overflow-hidden rounded-lg bg-white p-2 shadow-sm">
              <Image
                src={item.image}
                alt={item.name}
                width={150}
                height={100}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-center text-sm">{item.name}</span>
          </Link>
        ))}
      </div>
    </Container>
  );
};
