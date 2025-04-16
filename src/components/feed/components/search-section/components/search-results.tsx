import type { FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { SearchOutlined } from '@ant-design/icons';
import { SearchListingsQuery } from '@/graphql/__generated__/output';

interface Props {
  items: SearchListingsQuery['searchListings'];
  className?: string;
}

export const SearchResults: FC<Props> = ({ items, className }) => {
  if (items.length === 0) {
    return null;
  }

  console.log(items);

  return (
    <div
      className={clsx(
        'absolute left-0 right-0 top-full z-50 rounded-md border border-gray-200 bg-white shadow-lg',
        className,
      )}>
      <div className="p-2 text-sm text-gray-500">Популярные запросы</div>

      <div className="border-t border-gray-100">
        {items.map((item, index) => (
          <Link href="#" key={index} className="flex items-center px-4 py-2 hover:bg-gray-50">
            <SearchOutlined size={16} className="mr-3" />
            <div>
              <div className="font-medium">{item.name}</div>
              <div className="text-xs text-gray-500">{item.categories[0]?.name}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="border-t border-gray-100 p-2">
        <Link
          href="#"
          className="block p-2 text-center text-sm text-[var(--avito-primary)] hover:underline">
          Показать все результаты
        </Link>
      </div>
    </div>
  );
};
