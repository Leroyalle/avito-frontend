import '@ant-design/v5-patch-for-react-19';
import { useState, type FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useSearchListingsQuery } from '@/graphql/__generated__/output';
import { SearchResults } from './components';
import { Container } from '@/components/shared';
import { useClickOutside, useDebounceValue } from '@/hooks';

interface Props {
  className?: string;
}

export const SearchSection: FC<Props> = ({ className }) => {
  const [searchInput, setSearchInput] = useState('');
  const [isShowResults, setIsShowResults] = useState(false);
  const debouncedSearchValue = useDebounceValue(searchInput, [searchInput]);
  const ref = useClickOutside(() => setIsShowResults(false));
  const { data: searchResults, loading } = useSearchListingsQuery({
    variables: {
      searchListingsInput: {
        name: debouncedSearchValue,
      },
    },
    skip: !debouncedSearchValue,
  });

  console.log(loading);

  return (
    <Container className={clsx('relative px-4 py-4', className)} ref={ref}>
      <div className="flex items-center">
        <Link href="/" className="mr-4 flex items-center">
          <div className="flex">
            <span className="h-8 w-8 rounded-full bg-green-500"></span>
            <span className="h-8 w-8 rounded-full bg-cyan-500 -ml-2"></span>
            <span className="h-8 w-8 rounded-full bg-orange-500 -ml-2"></span>
          </div>
          <span className="ml-2 text-2xl font-bold">Avito</span>
        </Link>

        <div className="flex flex-1 items-center gap-1">
          <Button
            variant="outlined"
            className="rounded-l-md rounded-r-none border-r-0 bg-cyan-500 text-white hover:bg-cyan-600 hover:text-white">
            <SearchOutlined className="mr-2 h-4 w-4" size={16} />
            Все категории
          </Button>
          <Input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={() => setIsShowResults(true)}
            placeholder="Поиск по объявлениям"
            className="rounded-none border-x-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button disabled={loading}>Найти</Button>
          <div className="ml-4 flex items-center text-sm">Во всех регионах</div>
        </div>
      </div>
      {isShowResults && searchInput && (
        <SearchResults items={searchResults?.searchListings ?? []} />
      )}
    </Container>
  );
};
