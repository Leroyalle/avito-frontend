export interface FiltersState {
  isNew: boolean;
  minPrice: number;
  maxPrice: number;
  page: number;
  perPage: number;
  viewMode: 'list' | 'grid';
  filters: string[];
}
