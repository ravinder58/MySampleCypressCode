/// <reference types="cypress" />  

class loginPage {

    visit() {

        cy.visit("https://automationteststore.com/index.php?rt=account/login")
    }

   //  action method to fill the email 
    fillEmail(value)
    {
       const field= cy.get('#loginFrm_loginname')
      //  field.clear()
       field.type(value)
       return this
    }


    //  action method to fill the password
    fillPassword(value)
    {
       const field= cy.get('#loginFrm_password')
      //  field.clear()
       field.type(value)
       return this
    }


   //  action method to click on the login button
    submit()
    {
       const button= cy.get('button[title="Login"]')
       button.click()

    }
    // to make sure this class is visible in other methods as well.

    
} 

// this class should be available for all other classes 

export default loginPage
