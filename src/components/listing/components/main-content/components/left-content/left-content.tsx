import type { FC } from 'react';
import { clsx } from 'clsx';
import { Characteristics, ImageGallery, ListingActions } from './components';

interface Props {
  className?: string;
}

export const LeftContent: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('lg:col-span-2', className)}>
      <ImageGallery />
      <ListingActions />
      <Characteristics />
    </div>
  );
};
