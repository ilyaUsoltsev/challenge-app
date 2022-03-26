import { IOffersResponse } from './offer.types';

export interface IPaginationConfig {
  offset: number;
  limit: number;
}

export const fetchOffers = ({
  offset,
  limit,
}: IPaginationConfig): Promise<IOffersResponse> => {
  return fetch(
    `http://localhost:3001/offers?offset=${offset}&limit=${limit}`
  ).then((res) => res.json());
};
