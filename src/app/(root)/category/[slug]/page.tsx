import { CategoryWrapper } from '@/components';
import { Provider } from 'jotai';

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page: string }>;
}) {
  const slug = (await params).slug;
  const page = parseInt((await searchParams).page || '1');
  return (
    <Provider>
      <CategoryWrapper slug={slug} page={page} />
    </Provider>
  );
}
