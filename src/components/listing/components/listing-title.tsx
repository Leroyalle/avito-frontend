import type { FC } from 'react';

interface Props {
  title: string;
  className?: string;
}

export const ListingTitle: FC<Props> = ({ title, className }) => {
  return (
    <div className={className}>
      <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
    </div>
  );
};
