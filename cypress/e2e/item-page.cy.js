describe('inspect item page', () => {
    it('check item page', () => {
        cy.visit(`/`)
        cy.get(`.hrefch`).first().click()

        cy.get(`#tbodyid`).each(($el) => {
            cy.wrap($el).find('h2').should('contain', 'Samsung galaxy s6')
            cy.wrap($el).find(`#more-information`).should('contain', 'Product description')
            cy.get('#more-information > p').should('be.visible')
            cy.wrap($el).find(`.price-container`).invoke(`text`).should(`match`, /^\$\d*/)
                .and('contain', ' *includes tax')
            cy.wrap($el).find(`.col-sm-12 > .btn`).should('contain', 'Add to cart')
        })
    });
})
