import { SerializedError } from '@reduxjs/toolkit';
import { IOffer } from '../../api/offers/offer.types';

export interface OffersState {
  offers?: IOffer[];
  status: 'idle' | 'loading' | 'failed';
  offersTotal: number;
  error?: SerializedError;
}

export const offersInitialState: OffersState = {
  offers: undefined,
  status: 'idle',
  offersTotal: 0,
  error: undefined,
};
