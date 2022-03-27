import React, { FC } from 'react';
import { OffersState } from '../../../../redux/offers/offers-state';
import { getShimmerArray } from '../../utils/get-shimmer-array';
import { Cell as StyledCell } from '../offers-card/offers-card.styles';
import * as Styled from './offers-loading-cards.styles';

interface IProps {
  currentOffersTotal: number;
  status: OffersState['status'];
}

export const OffersLoadingCards: FC<IProps> = ({
  currentOffersTotal,
  status,
}) => {
  return (
    <>
      {status === 'loading'
        ? getShimmerArray(currentOffersTotal === 0 ? 12 : 4).map((index) => (
            <StyledCell key={index}>
              <Styled.ShimmerCard />
            </StyledCell>
          ))
        : null}
    </>
  );
};
