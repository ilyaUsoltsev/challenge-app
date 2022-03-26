import React, { FC } from 'react';
import { IOffer } from '../../../../api/offers/offer.types';
import { OffersState } from '../../../../redux/offers/offers-reducer';
import { OffersCard } from '../offers-card/offers-card';

interface IProps {
  offers?: IOffer[];
  status: OffersState['status'];
}

export const OffersCards: FC<IProps> = ({ offers, status }) => {
  if (!offers && status === 'idle') {
    return <h2>No offers found</h2>;
  }
  return (
    <>
      {offers?.length
        ? offers.map((offer) => <OffersCard offer={offer} key={offer.id} />)
        : null}
    </>
  );
};
