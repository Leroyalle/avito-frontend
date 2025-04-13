import type { FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { Container } from '@/components/shared';

interface Props {
  items: any[];
  className?: string;
}

export const Subcategories: FC<Props> = ({ className }) => {
  return (
    <Container className={clsx('px-4 py-4', className)}>
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Категории</h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {/* {category.subcategories.map((subcat, index) => (
            <Link
              key={index}
              href="#"
              className="flex items-center justify-between rounded-md p-2 hover:bg-gray-50">
              <span>{subcat.name}</span>
              <span className="text-sm text-gray-500">{subcat.count.toLocaleString()}</span>
            </Link>
          ))} */}
        </div>
      </div>
    </Container>
  );
};
