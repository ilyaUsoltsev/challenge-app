import { useCallback, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { selectOffersState } from '../../../redux/offers/offers-reducer';
import { fetchOffersAsync } from '../../../redux/offers/offers-actions';
import { PAGE_LIMIT } from '../constants';

export const useGetOffers = () => {
  const { offers, status, error, offersTotal } =
    useAppSelector(selectOffersState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAsync({ limit: PAGE_LIMIT, offset: 0 }));
  }, []);

  const loadMoreOffers = useCallback(() => {
    if (status === 'idle' && offers && offersTotal > offers.length) {
      dispatch(fetchOffersAsync({ limit: PAGE_LIMIT, offset: offers.length }));
    }
  }, [status, offersTotal, offers, dispatch]);

  return {
    offers,
    status,
    loadMoreOffers,
    error,
  };
};
