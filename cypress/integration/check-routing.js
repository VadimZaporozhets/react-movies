describe('Routing', function() {
    it('Should go to details on movie tile click', () => {
        cy.visit('http://localhost:9000');

        cy.get('.movie-tile')
            .first()
            .click();

        cy.url().should('include', '/details');

        cy.get('.overview')
            .first()
            .should('exist');

        cy.get('.release-year')
            .first()
            .should('exist');

        cy.get('.movie-rating')
            .first()
            .should('exist');

        cy.get('.movie-title')
            .first()
            .should('exist');
    });
});
