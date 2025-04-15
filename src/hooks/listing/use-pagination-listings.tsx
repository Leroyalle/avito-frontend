import { useFindAllListingsBySlugCategoryQuery } from '@/graphql/__generated__/output';
import { filtersAtom } from '@/store/filters-atom';
import { useAtom } from 'jotai';

export const usePaginationListings = (slug: string) => {
  const [filters, setFilters] = useAtom(filtersAtom);
  const { data, loading } = useFindAllListingsBySlugCategoryQuery({
    variables: {
      findListingsInput: {
        page: filters.page,
        perPage: filters.perPage,
        filters: filters.filters,
        maxPrice: filters.maxPrice,
        minPrice: filters.minPrice,
      },
      slug,
    },
  });

  const hasMore = data?.findAllBySlugCategory
    ? data?.findAllBySlugCategory.length < filters.perPage
    : false;

  return {
    data,
    hasMore,
    page: filters.page,
    setPage: (page: number) => setFilters({ ...filters, page: page }),
    loading,
  };
};
