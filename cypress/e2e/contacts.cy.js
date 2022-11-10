const chance = require(`chance`).Chance()


describe('contacts', () => {
    it('', () => {
        cy.visit(`/`)
        cy.contains(`[data-toggle="modal"]`, 'Contact').click()
        cy.get(`#exampleModalLabel`).should(`be.visible`)
        cy.contains(`[class="btn btn-primary"]`, `Send message`).should(`be.visible`)
    });

    it('check all fields', () => {
        cy.contains(`.modal-body`, `Contact Email:`).should(`contain`, `Email`)
        cy.contains(`.modal-body`, `Contact Name:`).should(`be.visible`)
        cy.contains(`.modal-body`, `Message:`).should(`be.visible`)
    });

    it('user can send the message', () => {
        cy.get(`#recipient-email`).type(`${Cypress.env('EMAIL')}`)
        cy.get(`#recipient-name`).type(`${chance.name()}`)
        cy.get(`#message-text`).type(`${chance.sentence({words: 7})}`)
        cy.contains(`button`,`Send message`).click()

    });
});
