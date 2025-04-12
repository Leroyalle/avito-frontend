import { Cursor } from '@/components';
import { useFindAllListingsQuery } from '@/graphql/__generated__/output';
import { NetworkStatus } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const useInfiniteScrollListings = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [hasMore, setHasMore] = useState(true);
  const perPage = 20;

  const { data, fetchMore, loading, networkStatus } = useFindAllListingsQuery({
    variables: {
      pagePagination: {
        page: 1,
        perPage,
      },
    },
    notifyOnNetworkStatusChange: true,
  });

  const isLoading = loading && networkStatus !== NetworkStatus.fetchMore;
  const isFetchingNextPage = loading && networkStatus === NetworkStatus.fetchMore;
  const page = data?.findAllListings ? Math.ceil(data.findAllListings.length / perPage) : 1;

  useEffect(() => {
    if (!data || !hasMore || isLoading || isFetchingNextPage) return;

    if (inView && data.findAllListings.length > 0) {
      fetchMore({
        variables: {
          pagePagination: {
            page: page + 1,
            perPage,
          },
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult?.findAllListings?.length) {
            setHasMore(false);
            return prev;
          }
          return {
            ...prev,
            findAllListings: [...prev.findAllListings, ...fetchMoreResult.findAllListings],
          };
        },
      }).catch(() => {
        setHasMore(false);
      });
    }
  }, [inView, data, hasMore, isLoading, isFetchingNextPage, fetchMore, page, perPage]);

  const cursor = (
    <Cursor
      ref={ref}
      hideCursor={isLoading || isFetchingNextPage || !data}
      isLoading={isFetchingNextPage}
    />
  );

  return {
    data,
    isLoading,
    isFetchingNextPage,
    cursor,
  };
};
