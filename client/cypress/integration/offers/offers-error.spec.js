/* eslint-disable no-undef */

describe('Offers page with error', () => {
  it('should open offers page and display 12 cards', () => {
    cy.intercept('GET', '/*', { forceNetworkError: true }).as('err');

    cy.visit('http://localhost:3000/');
    cy.wait('@err').then(() => {
      cy.contains('Failed to fetch offers');
      cy.contains('Failed to fetch');
    });
  });
});
