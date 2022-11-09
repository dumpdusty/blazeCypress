import testData from "../fixtures/test-data";

describe('SignUp-Login Suite', function () {

    it(`sign up with valid credentials`, function () {
        cy.visit(`/`)
        cy.get(`#signin2`).click()
        cy.get(`[onclick="register()"]`).should(`be.visible`)
        cy.get(`#sign-username`).click().wait(200).type(`${testData.randomUserEmail}`)
        cy.get(`#sign-password`).click().wait(200).type(`${Cypress.env('PASSWORD')}`)
        cy.get(`[onclick="register()"]`).click()

        /* to check if user registered successfully we have to log in with used credentials */

        cy.get(`#login2`).click()
        cy.get(`[onclick="logIn()"]`).should(`be.visible`)
        cy.get(`#loginusername`).click().wait(200).type(`${testData.randomUserEmail}`)
        cy.get(`#loginpassword`).click().wait(200).type(`${Cypress.env('PASSWORD')}`)
        cy.get(`[onclick="logIn()"]`).click()
        cy.get(`#nameofuser`).should(`contain`, `${testData.randomUserEmail}`)
    })

    it(`login`, function () {
        cy.visit(`/`)
        cy.get(`#login2`).click()
        cy.get(`[onclick="logIn()"]`).should(`be.visible`)
        cy.get(`#loginusername`).click().wait(200).type(`${Cypress.env('EMAIL')}`)
        cy.get(`#loginpassword`).click().wait(200).type(`${Cypress.env('PASSWORD')}`)
        cy.get(`[onclick="logIn()"]`).click()
        cy.get(`#nameofuser`).should(`contain`, `${Cypress.env('EMAIL')}`)

    })
})
