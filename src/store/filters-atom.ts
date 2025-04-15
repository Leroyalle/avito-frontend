import { FiltersState } from '@/types';
import { atom } from 'jotai';

export const initialFilters: FiltersState = {
  isNew: false,
  minPrice: 0,
  maxPrice: 100000,
  page: 1,
  perPage: 20,
  viewMode: 'list',
  filters: [],
};

export const filtersAtom = atom(initialFilters);

export const filtersDictionaryAtom = atom((get) => {
  const { filters } = get(filtersAtom);
  return Object.fromEntries(filters.map((filter) => [filter, filter]));
});
