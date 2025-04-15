import { initialFilters } from '@/store/filters-atom';
import { FiltersState, QueryFilters } from '@/types';

export const parseFiltersFromSearchParams = (searchParams: QueryFilters): FiltersState => {
  return {
    page: parseInt(searchParams.page || `${initialFilters.page}`),
    perPage: parseInt(searchParams.perPage || `${initialFilters.perPage}`),
    isNew: searchParams.isNew?.toLowerCase() === 'true',
    minPrice: searchParams.minPrice ? parseFloat(searchParams.minPrice) : initialFilters.minPrice,
    maxPrice: searchParams.maxPrice ? parseFloat(searchParams.maxPrice) : initialFilters.maxPrice,
    viewMode: searchParams.viewMode || initialFilters.viewMode,
    filters: (() => {
      if (!searchParams.filters) return initialFilters.filters;

      if (Array.isArray(searchParams.filters)) {
        return searchParams.filters;
      }

      return searchParams.filters.split(',');
    })(),
  };
};
