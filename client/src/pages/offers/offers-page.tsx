import { useInView } from 'react-intersection-observer';
import { useGetOffers } from './hooks/use-get-offers';
import { useEffect } from 'react';
import {
  StyledPageContainer,
  StyledPageTitle,
} from '../../styles/page/page.styles';
import * as Styled from './offers-page.styles';
import { OffersCards } from './components/offers-cards/offers-cards';
import { OffersLoadingCards } from './components/offers-loading-cards/offers-loading-cards';
import WithError from '../../components/hoc/with-error/with-error';

export function OffersPage() {
  const { offers, status, loadMoreOffers, error } = useGetOffers();
  const [intersectionRef, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      loadMoreOffers();
    }
  }, [inView]);
  console.log(status, 'status');
  return (
    <StyledPageContainer>
      <StyledPageTitle>Offers</StyledPageTitle>
      <WithError error={error}>
        <Styled.Container>
          <OffersCards offers={offers} status={status} />
          <OffersLoadingCards
            status={status}
            currentOffersTotal={offers?.length ?? 0}
          />
        </Styled.Container>
      </WithError>
      <Styled.Intersection ref={intersectionRef}></Styled.Intersection>
    </StyledPageContainer>
  );
}
