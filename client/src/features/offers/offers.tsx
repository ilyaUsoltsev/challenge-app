import React, { useEffect } from 'react';
import styles from './offers.module.css';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchOffersAsync,
  selectOffers,
  selectOffersStatus,
} from './offersSlice';

const shimmerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function Offers() {
  const offers = useAppSelector(selectOffers);
  const status = useAppSelector(selectOffersStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAsync());
  }, []);

  // if (status === 'loading') {
  //   return <div> LOADING...</div>;
  // }

  if (status === 'failed') {
    return <div> ERROR!!!</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Offers</h1>
      <div className={styles.container}>
        {status === 'loading'
          ? shimmerArray.map((index) => (
              <div key={index} className={styles.cell}>
                <div
                  className={`${styles.shimmercontent} ${styles.shimmerBG}`}
                ></div>
              </div>
            ))
          : offers.map((offer) => (
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
            ))}
      </div>
    </div>
  );
}
