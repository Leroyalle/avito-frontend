import type { FC } from 'react';
import { clsx } from 'clsx';
import { Badge, Button } from 'antd';
import { useAtomValue } from 'jotai';
import { filtersAtom, filtersDictionaryAtom, initialFilters } from '@/store/filters-atom';
import { FindAllFiltersQuery } from '@/graphql/__generated__/output';
import { useSetAtom } from 'jotai';

interface Props {
  items: FindAllFiltersQuery['findAllFilters'];
  className?: string;
}

export const ActiveFilters: FC<Props> = ({ items, className }) => {
  const setFilters = useSetAtom(filtersAtom);
  const filtersDictionary = useAtomValue(filtersDictionaryAtom);

  return (
    <div className={clsx('mb-4 flex flex-wrap gap-2 items-center', className)}>
      {items.map((item) =>
        filtersDictionary && filtersDictionary[item.id] ? (
          <Badge
            key={item.id}
            className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
            {item.name}
            <button
              className="ml-1 text-gray-500 hover:text-gray-700"
              onClick={() => {
                setFilters((prev) => ({
                  ...prev,
                  filters: prev.filters.filter((filter) => filter !== item.id),
                }));
              }}>
              ×
            </button>
          </Badge>
        ) : null,
      )}

      {Object.keys(filtersDictionary).length > 0 && (
        <Button type="text" onClick={() => setFilters(initialFilters)}>
          Сбросить все
        </Button>
      )}
    </div>
  );
};
