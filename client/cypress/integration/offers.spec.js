describe('Our first test', () => {
  it('should go to our sample react app', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Offers');
  });
});
