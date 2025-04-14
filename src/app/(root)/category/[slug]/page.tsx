import { CategoryWrapper } from '@/components';
import { parseFiltersFromSearchParams } from '@/lib';
import { QueryFilters } from '@/types';
import { Provider } from 'jotai';

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<QueryFilters>;
}) {
  const slug = (await params).slug;
  const queryParams = await searchParams;
  const queryFilters = parseFiltersFromSearchParams(queryParams);

  return (
    <Provider>
      <CategoryWrapper slug={slug} queryFilters={queryFilters} />
    </Provider>
  );
}
