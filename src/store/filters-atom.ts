import { FiltersState } from '@/types';
import { atom } from 'jotai';

export const initialFilters: FiltersState = {
  isNew: false,
  minPrice: 0,
  maxPrice: 0,
  page: 1,
  perPage: 20,
  viewMode: 'list',
};

export const filtersAtom = atom(initialFilters);
