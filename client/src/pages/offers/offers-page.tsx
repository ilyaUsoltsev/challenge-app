import styles from './offers.module.css';
import { useInView } from 'react-intersection-observer';
import { getShimmerArray } from './utils/getShimmerArray';
import { useGetOffers } from './hooks/useGetOffers';
import { useEffect } from 'react';

export function OffersPage() {
  const { offers, status, loadMoreOffers } = useGetOffers();
  const [intersectionRef, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      loadMoreOffers();
    }
  }, [inView, loadMoreOffers]);

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
