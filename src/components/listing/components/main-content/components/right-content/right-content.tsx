import type { FC } from 'react';
import {
  PriceAndLogo,
  SellerQuestions,
  UserActions,
  UserBadges,
  UserInfo,
  UserProfileActions,
} from './components';
import { FindListingByIdQuery } from '@/graphql/__generated__/output';

interface Props {
  listing: FindListingByIdQuery['findOneListing'];
  className?: string;
}

export const RightContent: FC<Props> = ({ listing, className }) => {
  return (
    <div className={className}>
      <div className="sticky top-4 rounded-lg bg-white p-4 shadow-md">
        <PriceAndLogo price={listing.price} />
        <UserActions />
        <UserInfo
          name={listing.user.name}
          registerAt={listing.user.createdAt}
          totalReviews={12}
          userType={'Частное лицо'}
        />
        <UserBadges reviews={[{ id: '1', stars: 5 }]} />
        <UserProfileActions totalListings={2} />
        <SellerQuestions />
      </div>
    </div>
  );
};
