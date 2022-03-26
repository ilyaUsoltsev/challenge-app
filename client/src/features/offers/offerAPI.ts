import { IOffer } from './offer.types';

export const fetchOffers = (): Promise<IOffer[]> => {
  return fetch('http://localhost:3001/offers').then((res) => res.json());
};
