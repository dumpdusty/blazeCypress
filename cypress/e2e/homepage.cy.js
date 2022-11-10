describe('HomePage Suite', function () {
    it(`should have a title`, function () {
        cy.visit(`/`)
        cy.title().should(`eq`, `STORE`)
    })

    it(`should have a header`, function () {
        cy.visit(`/`)
        cy.contains('PRODUCT STORE').should('be.visible')
    })

    it(`should have a footer`, function () {
        cy.visit(`/`)
        //footer should contain the text 'About us', 'Get in Touch', and ' PRODUCT STORE'
        cy.get(`#footc`).should('contain', 'About Us')
            .and('contain', 'Get in Touch')
            .and('contain', 'PRODUCT STORE')
    })

    it(`should have a carousel`, function () {
        cy.visit(`/`)
        cy.get(`#contcar`).should(`be.visible`)
    })

    it(`carousel should have 3 slides`, function () {
        cy.visit(`/`)
        cy.get(`.carousel-inner`).children().should(`have.length`, 3)
    })

    it(`carousel should have 3 indicators`, function () {
        cy.visit(`/`)
        cy.get(`.carousel-indicators`).children().should(`have.length`, 3)
    })

    it(`carousel should have 2 control icons`, function () {
        cy.visit(`/`)
        cy.get(`.carousel-control-prev-icon`).should(`be.visible`)
        cy.get(`.carousel-control-next-icon`).should(`be.visible`)
    })

    //control icons scroll the carousel
    it(`carousel should scroll when control icons are clicked`, function () {
        cy.visit(`/`)
        cy.get(`.carousel-control-next-icon`).click()
        cy.get('li[data-slide-to="0"]').should('not.have.class', 'active')
        cy.get('li[data-slide-to="1"]').should('have.class', 'active')

        cy.get(`.carousel-control-prev-icon`).click()
        cy.get('li[data-slide-to="0"]').should('not.have.class', 'active')
        cy.get('li[data-slide-to="1"]').should('have.class', 'active')
    })

    it(`should display 9 products`, function () {
        cy.visit(`/`)
        cy.get(`.card`).should(`have.length`, 9)
    })

    it(`should have a list of products with a name and short description`, function () {
        cy.visit(`/`)
          cy.get(`.card`).each(($el, index, $list) => {
            cy.wrap($el).find(`.card-title`).should('be.visible')
            cy.wrap($el).find(`.card-text`).should('be.visible')
              //is there a way to check that each item has a price?
          })
        })

    it(`each name is a hypertext`, function () {
        //does it test all 9 items?
        cy.visit(`/`)
        cy.get(`a[href="prod.html?idp_=1"]`).each(($el, index, $list) => {
            cy.wrap($el).should('have.attr', 'href')
        })
    })

    it('categories box is visible', function () {
        cy.visit(`/`)
        cy.get(`.list-group`).should('contain', 'CATEGORIES')
    })

    it('categories box has 3 items', function () {
        cy.visit(`/`)
        cy.get(`div[class='list-group']`).should('contain', 'Phones')
            .and('contain', 'Laptops')
            .and('contain', 'Monitors')
    })

   // it('clicking on Phones should display phones', function () {
   // onclick="byCat('phone')"
   // })

    it('navbar is visible and has 6 items', function () {
        cy.visit(`/`)
        cy.get(`div[class='navbar-collapse']`).should('contain', 'Home')
            .and('contain', 'Contact')
            .and('contain', 'About us')
            .and('contain', 'Cart')
            .and('contain', 'Log in')
            .and('contain', 'Sign up')
    })

    it('pagination should have two buttons: next and previous', function () {
        cy.visit(`/`)
        cy.get(`ul.pagination`).should('contain', 'Previous')
            .and('contain', 'Next')
    })
})
