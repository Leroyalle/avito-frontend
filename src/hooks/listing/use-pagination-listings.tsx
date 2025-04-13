import { useFindAllListingsBySlugCategoryQuery } from '@/graphql/__generated__/output';
import { filtersAtom } from '@/store/filters-atom';
import { useAtom } from 'jotai';

export const usePaginationListings = (slug: string) => {
  const [filters, setFilters] = useAtom(filtersAtom);
  const { data } = useFindAllListingsBySlugCategoryQuery({
    variables: {
      pagePagination: {
        page: filters.page,
        perPage: filters.perPage,
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
  };
};
