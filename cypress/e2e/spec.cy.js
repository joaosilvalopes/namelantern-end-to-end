describe('template spec', () => {
  it('should respond with correct page length', async () => {
    cy.visit('https://namelantern.com');

    const searchInput = cy.get('#searchBarInputDesktop', { timeout: 1000 });
    const searchButton = cy.contains('button[type="submit"]', 'Search', { timeout: 1000 });

    searchInput.type('stone');
    searchButton.click();

    cy.get('main > ul > li').should('have.length', 10, { timeout: 10000 });
  })
})