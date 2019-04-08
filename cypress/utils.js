export const exist = selector =>
    cy
        .get(selector)
        .first()
        .should('exist');
