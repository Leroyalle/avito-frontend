import type { FC } from 'react';
import {
  PriceAndLogo,
  SellerQuestions,
  UserActions,
  UserBadges,
  UserInfo,
  UserProfileActions,
} from './components';

interface Props {
  className?: string;
}

export const RightContent: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="sticky top-4 rounded-lg bg-white p-4 shadow-md">
        <PriceAndLogo />
        <UserActions />
        <UserInfo />
        <UserBadges />
        <UserProfileActions />
        <SellerQuestions />
      </div>
    </div>
  );
};
