/// <reference types="Cypress" />
 
describe('LoginDemo', () => {

    it('AutomationPractice-Login', () => {
      cy.visit('https://automationteststore.com/')
      cy.contains('Login or register').click()
       // Implicit assertion using should
       cy.get('#loginFrm_loginname').type('singhravinder')
       // Chaining the assertion using and
       cy.get('#loginFrm_password').type('Pathankot@584')
        cy.get("button[title='Login']").click()
        // Assertion
        cy.title().should('be.equal','My Account')
    })
})