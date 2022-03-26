import React, { FC } from 'react';
import { IOffer } from '../../../../api/offers/offer.types';
import * as Styled from './offers-card.styles';

interface IProps {
  offer: IOffer;
}

export const OffersCard: FC<IProps> = ({ offer }) => {
  return (
    <Styled.Cell>
      <Styled.Content>
        <h3>{offer.name}</h3>
        <Styled.CarImage src={offer.imgUrl} alt={offer.name} />
        <Styled.Price>{offer.price}€</Styled.Price>
      </Styled.Content>
    </Styled.Cell>
  );
};
