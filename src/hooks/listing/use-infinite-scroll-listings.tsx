import { Cursor } from '@/components';
import { useFindAllListingsQuery } from '@/graphql/__generated__/output';
import { NetworkStatus } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
export const useInfiniteScrollListings = () => {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(1);
  const { data, fetchMore, loading, networkStatus } = useFindAllListingsQuery({
    variables: {
      pagePagination: {
        page: 1,
        perPage: 20,
      },
    },
    notifyOnNetworkStatusChange: true,
  });

  const isLoading = loading && networkStatus !== NetworkStatus.fetchMore;
  const isFetchingNextPage = loading && networkStatus === NetworkStatus.fetchMore;

  useEffect(() => {
    if (!data) return;
    if (inView && !loading && data.findAllListings.length > 0) {
      const hasMore = data.findAllListings.length === page * 20;

      if (!hasMore) return;

      fetchMore({
        variables: {
          pagePagination: {
            page: page + 1,
            perPage: 20,
          },
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult?.findAllListings?.length) return prev;

          return {
            ...prev,
            findAllListings: [...prev.findAllListings, ...fetchMoreResult.findAllListings],
          };
        },
      }).then(() => {
        setPage((prevPage) => prevPage + 1);
      });
    }
  }, [inView, loading, fetchMore, page, data]);

  const cursor = (
    <Cursor
      ref={ref}
      hideCursor={isLoading || isFetchingNextPage || !data}
      isLoading={isFetchingNextPage}
    />
  );

  return {
    data,
    ref,
    isLoading,
    isFetchingNextPage,
    cursor,
  };
};
