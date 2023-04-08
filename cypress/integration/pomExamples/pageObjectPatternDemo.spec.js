/// <reference types="cypress" />  


import loginPage from "../pageObjects/loginPage";

describe('Test Suite', function()
{

it('Valid Login Test',function()
{
    // creating object for the class loginpage
    const lp=new loginPage()

    lp.visit()
    lp.fillEmail('rmanhas699')
    lp.fillPassword('Montreal@1829')
    lp.submit()
    // assertion to verify that it is valid login scenario

    cy.title().should('be.equal','My Account')
})

it()
it()

})