describe('Shopping Cart', () => {
    it('should add product to cart', () => {
        cy.visit(`/`)
        cy.get(`.hrefch`).first().click()
        cy.contains('Add to cart').click()
        cy.get('#cartur').click()
        //page-wrapper should contain products, pic, title, price, x, and total
        cy.get(`#page-wrapper`).should('contain', 'Products')
            .and('contain', 'Pic')
            .and('contain', 'Title')
            .and('contain', 'Price')
            .and('contain', 'x')
            .and('contain', 'Total')
            .and('contain', 'Samsung galaxy s6')
    })

    it('should remove product from cart', () => {
        cy.visit(`/`)
        cy.get(`.hrefch`).first().click()
        cy.contains('Add to cart').click()
        cy.get('#cartur').click()

        cy.get(`#page-wrapper`).should('contain', 'Samsung galaxy s6')
        cy.contains('Delete').click()
        cy.get(`#page-wrapper`).should('not.contain', 'Samsung galaxy s6')
    })

    it('should add multiple products to cart', () => {
        cy.visit(`/`)
        cy.get(`.hrefch`).first().click()
        cy.contains('Add to cart').click()
        cy.get('a.nav-link').contains('Home').click()
        cy.get(`.hrefch`).eq(1).click()
        cy.contains('Add to cart').click()
        cy.get('#cartur').click()

        cy.get(`#page-wrapper`).should('contain', 'Samsung galaxy s6')
            .and('contain', 'Nokia lumia 1520')
    })

    it('should add multiple products to cart and remove one', () => {
        cy.visit(`/`)
        cy.get(`.hrefch`).first().click()
        cy.contains('Add to cart').click()
        cy.get('a.nav-link').contains('Home').click()
        cy.get(`.hrefch`).eq(1).click()
        cy.contains('Add to cart').click()
        cy.get('#cartur').click()

        cy.get(`#page-wrapper`).should('contain', 'Samsung galaxy s6')
            .and('contain', 'Nokia lumia 1520')
        cy.contains('Delete').click()
        cy.get(`#page-wrapper`).should('not.contain', 'Samsung galaxy s6')
            .and('contain', 'Nokia lumia 1520')
    })

    it('should add multiple products to cart and remove all', () => {
        cy.visit(`/`)
        cy.get(`.hrefch`).first().click()
        cy.contains('Add to cart').click()
        cy.get('a.nav-link').contains('Home').click()
        cy.get(`.hrefch`).eq(1).click()
        cy.contains('Add to cart').click()
        cy.get('#cartur').click()

        //get the first item in the cart and delete it
        cy.get(`#page-wrapper`).first().contains('Delete').click()
        cy.contains('Delete').click()
        //there should be no items in the cart
        cy.get(`#page-wrapper`).should('not.contain', 'Samsung galaxy s6')
            .and('not.contain', 'Nokia lumia 1520')
    })

    it('should place an order', () => {
        cy.visit(`/`)
        cy.get(`.hrefch`).first().click()
        cy.contains('Add to cart').click()
        cy.get('#cartur').click()

        cy.get(`#page-wrapper`).should('contain', 'Samsung galaxy s6')
        cy.get('button[data-target=\'#orderModal\']').click()
        cy.get('#orderModalLabel').should('be.visible')
        cy.wait(100)
            cy.get('#name').type('John Doe')
            cy.get('#country').type('USA')
            cy.get('#city').type('Houston')
            cy.get('#card').type('4444 4444 4444 4444')
            cy.get('#month').type('12')
            cy.get('#year').type('2020')
        cy.get('button.btn.btn-primary').contains('Purchase').click()

        cy.get('h2').should('contain', 'Thank you for your purchase!')
        cy.get('button.confirm.btn.btn-lg.btn-primary').click()
       //doesn't let me go back to cart and check if it's empty
    })
       //done for today, have no idea what else to test
})
