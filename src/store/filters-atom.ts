import { atom } from 'jotai';

interface FiltersState {
  isNew: boolean;
  minPrice: number;
  maxPrice: number;
  page: number;
  perPage: number;
  viewMode: 'list' | 'grid';
}

export const initialFilters: FiltersState = {
  isNew: false,
  minPrice: 0,
  maxPrice: 0,
  page: 1,
  perPage: 20,
  viewMode: 'list',
};

export const filtersAtom = atom(initialFilters);
