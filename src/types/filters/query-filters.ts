export interface QueryFilters {
  isNew: string;
  minPrice: string;
  maxPrice: string;
  page: string;
  perPage: string;
  viewMode: 'list' | 'grid';
  filters: string | string[];
}
