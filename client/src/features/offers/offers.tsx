import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchOffersAsync,
  selectOffers,
  selectOffersStatus,
} from './offersSlice';

export function Offers() {
  const offers = useAppSelector(selectOffers);
  const status = useAppSelector(selectOffersStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAsync());
  }, []);

  if (status === 'loading') {
    return <div> LOADING...</div>;
  }

  if (status === 'failed') {
    return <div> ERROR!!!</div>;
  }

  return <div>{JSON.stringify(offers)}</div>;
}
