import testData from "../fixtures/test-data.js";

describe('SignUp-Login Suite', function () {

    it(`sign up with valid credentials`, function () {
        cy.visit(`/`)
        cy.get(`#signin2`).click()
        cy.get(`[onclick="register()"]`).should(`be.visible`)
        cy.get(`#sign-username`).click().wait(200).type(`${testData.randomUserEmail}`)
        cy.get(`#sign-password`).click().wait(200).type(`${Cypress.env('PASSWORD')}`)
        cy.get(`[onclick="register()"]`).click()
        cy.on(`window:alert`, (alert) => {
            expect(alert).to.eq(`Sign up successful.`)
        })
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


describe(`Negative test`, () => {

    it('sign up without password', () => {
        cy.visit(`/`)
        cy.get(`#signin2`).click()
        cy.get(`[onclick="register()"]`).should(`be.visible`)
        cy.get(`#sign-username`).click().wait(200).type(`${testData.randomUserEmail}`)
        cy.get(`[onclick="register()"]`).click()
        cy.on(`window:alert`, (alert) => {
            expect(alert).to.eq(`Please fill out Username and Password.`)
        })
    })

    it('sign up without username', () => {
        cy.visit(`/`)
        cy.get(`#signin2`).click()
        cy.get(`[onclick="register()"]`).should(`be.visible`)
        cy.get(`#sign-password`).click().wait(200).type(`${Cypress.env(`PASSWORD`)}`)
        cy.get(`[onclick="register()"]`).click()
        cy.on(`window:alert`, (alert) => {
            expect(alert).to.eq(`Please fill out Username and Password.`)
        })
    })


    it('login without data', () => {
        cy.visit(`/`)
        cy.get(`#login2`).click()
        cy.get(`[onclick="logIn()"]`).click()

        cy.on(`window:alert`, (alert) => {
            expect(alert).to.eq(`Please fill out Username and Password.`)
        })
    });

    it('login with invalid data', () => {
        cy.visit(`/`)
        cy.get(`#login2`).click()
        cy.get(`#loginusername`).click().wait(200).type(`invalid@test.com`)
        cy.get(`#loginpassword`).click().wait(200).type(`invalid`)
        cy.get(`[onclick="logIn()"]`).click()

        cy.on(`window:alert`, (alert) => {
            expect(alert).to.eq(`User does not exist.`)
        })

    });
});
