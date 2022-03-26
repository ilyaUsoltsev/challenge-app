import { useCallback, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import {
  selectOffers,
  selectOffersStatus,
  selectOffersTotal,
  fetchOffersAsync,
} from '../../../redux/offers/offers-reducer';
import { PAGE_LIMIT } from '../constants';

export const useGetOffers = () => {
  const offers = useAppSelector(selectOffers);
  const status = useAppSelector(selectOffersStatus);
  const offersTotal = useAppSelector(selectOffersTotal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAsync({ limit: PAGE_LIMIT, offset: 0 }));
  }, []);

  const loadMoreOffers = useCallback(() => {
    if (status !== 'loading' && offersTotal > offers.length) {
      dispatch(fetchOffersAsync({ limit: PAGE_LIMIT, offset: offers.length }));
    }
  }, [status, offersTotal, offers, dispatch]);

  return {
    offers,
    status,
    loadMoreOffers,
  };
};
