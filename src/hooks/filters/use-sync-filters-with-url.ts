import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { filtersAtom } from '@/store/filters-atom';

export const useSyncFiltersWithUrl = () => {
  const filters = useAtomValue(filtersAtom);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const currentParams = new URLSearchParams(searchParams.toString());

    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        if (value.length > 0) {
          currentParams.set(key, value.join(','));
        } else {
          currentParams.delete(key);
        }
      } else if (value) {
        currentParams.set(key, value);
      } else {
        currentParams.delete(key);
      }
    });

    router.replace(`${pathname}?${currentParams.toString()}`, { scroll: false });
  }, [filters, pathname, searchParams, router]);
};
