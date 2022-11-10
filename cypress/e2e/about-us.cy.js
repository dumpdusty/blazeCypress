describe('about us', () => {
    it('modal window opening', () => {
        cy.visit(`/`)
        cy.contains(`[data-toggle="modal"]`, 'About us').click()
        cy.get(`[class="btn btn-secondary"]`).should(`be.visible`)

    });
});
