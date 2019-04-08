import { exist } from '../utils';

describe('Routing', function() {
    it('Should go to details on movie tile click', () => {
        cy.visit('http://localhost:9000');

        cy.get('.movie-tile')
            .first()
            .click();

        cy.url().should('include', '/details');

        exist('.overview');
        exist('.release-year');
        exist('.movie-rating');
        exist('.movie-title');
    });
});
