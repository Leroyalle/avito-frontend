import type { FC } from 'react';

interface Props {
  className?: string;
}

export const ListingTitle: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <h1 className="text-2xl font-bold md:text-3xl">Chevrolet Aveo 1.4 MT, 2013, 1 200 км</h1>
    </div>
  );
};
