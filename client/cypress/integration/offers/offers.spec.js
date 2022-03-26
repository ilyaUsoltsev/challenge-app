/* eslint-disable no-undef */
import dataFirstPage from '../../fixtures/data-page-1.json';
import dataSecondPage from '../../fixtures/data-page-2.json';

describe('Offers page', () => {
  const offersFirstPage = dataFirstPage.offers;
  const offersSecondPage = dataSecondPage.offers;

  it('should open offers page and display 12 cards', () => {
    cy.intercept(
      'GET',
      'http://localhost:3001/offers?offset=0&limit=12',
      (req) => {
        req.reply({ fixture: 'data-page-1.json' });
      }
    );

    cy.visit('http://localhost:3000/');
    cy.get('h1').contains('Offers');

    for (let i = 0; i < offersFirstPage.length; i++) {
      cy.get('[data-testid="offer-card"]')
        .eq(i)
        .contains(offersFirstPage[i].name);
      cy.get('[data-testid="offer-card"]')
        .eq(i)
        .contains(offersFirstPage[i].price + '€');
      cy.get('[data-testid="offer-card"]')
        .eq(i)
        .find('img')
        .should('have.attr', 'src')
        .should('include', offersFirstPage[i].imgUrl || 'default-car-image');
    }
  });
  it('should fetch 12 more cards after scrolling down', () => {
    cy.intercept(
      'GET',
      'http://localhost:3001/offers?offset=12&limit=12',
      (req) => {
        req.reply({ fixture: 'data-page-2.json' });
      }
    );
    cy.get('[data-testid="offer-card"]').should('have.length', 12);
    cy.scrollTo(0, 1000);
    cy.get('[data-testid="offer-card"]').should('have.length', 24);
    cy.get('[data-testid="offer-card"]')
      .eq(12)
      .contains(offersSecondPage[0].name);
  });
});
