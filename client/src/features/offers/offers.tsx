import React, { useEffect } from 'react';
import styles from './offers.module.css';
import { useInView } from 'react-intersection-observer';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectOffersTotal } from './offersSlice';
import {
  fetchOffersAsync,
  selectOffers,
  selectOffersStatus,
} from './offersSlice';

const PAGE_LIMIT = 12;
const getShimmerArray = (cardsToShow: number) =>
  Array.from(Array(cardsToShow).keys());

export function Offers() {
  const offers = useAppSelector(selectOffers);
  const status = useAppSelector(selectOffersStatus);
  const offersTotal = useAppSelector(selectOffersTotal);
  const dispatch = useAppDispatch();

  const [intersectionRef, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    dispatch(fetchOffersAsync({ limit: PAGE_LIMIT, offset: 0 }));
  }, []);

  useEffect(() => {
    if (inView && status !== 'loading' && offersTotal > offers.length) {
      dispatch(fetchOffersAsync({ limit: PAGE_LIMIT, offset: offers.length }));
    }
  }, [inView, offersTotal]);

  if (status === 'failed') {
    return <div> ERROR!!!</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Offers</h1>
      <div className={styles.container}>
        {offers.length
          ? offers.map((offer) => (
              <div key={offer.id} className={styles.cell}>
                <div className={styles.content}>
                  <h3>{offer.name}</h3>
                  <img
                    src={offer.imgUrl}
                    alt={offer.name}
                    className={styles.image}
                  />
                  <div className={styles.price}>{offer.price}€</div>
                </div>
              </div>
            ))
          : null}
        {status === 'loading'
          ? getShimmerArray(offers.length === 0 ? 12 : 4).map((index) => (
              <div key={index} className={styles.cell}>
                <div
                  className={`${styles.shimmercontent} ${styles.shimmerBG}`}
                ></div>
              </div>
            ))
          : null}
      </div>
      <div style={{ height: '1px' }} ref={intersectionRef}></div>
    </div>
  );
}
