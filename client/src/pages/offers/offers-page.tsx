import { useInView } from 'react-intersection-observer';
import { getShimmerArray } from './utils/get-shimmer-array';
import { useGetOffers } from './hooks/use-get-offers';
import { useEffect } from 'react';
import {
  StyledPageContainer,
  StyledPageTitle,
} from '../../styles/page/page.styles';
import * as Styled from './offers.styles';

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
    <StyledPageContainer>
      <StyledPageTitle>Offers</StyledPageTitle>
      <Styled.Container>
        {offers.length
          ? offers.map((offer) => (
              <Styled.Cell key={offer.id}>
                <Styled.Content>
                  <h3>{offer.name}</h3>
                  <Styled.CarImage src={offer.imgUrl} alt={offer.name} />
                  <Styled.Price>{offer.price}€</Styled.Price>
                </Styled.Content>
              </Styled.Cell>
            ))
          : null}
        {status === 'loading'
          ? getShimmerArray(offers.length === 0 ? 12 : 4).map((index) => (
              <Styled.Cell key={index}>
                <Styled.ShimmerCard />
              </Styled.Cell>
            ))
          : null}
      </Styled.Container>
      <div style={{ height: '1px' }} ref={intersectionRef}></div>
    </StyledPageContainer>
  );
}
