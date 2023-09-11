/// <reference types="cypress" />

describe('practicing each method', () => {
    
    it('practice tabs method', () => {

cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
cy.contains('Click for JS Prompt').click()

//cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//cy.contains('Forgot your password? ').click()

cy.window().then((x) => {
    cy.contains('Click for JS Prompt').click()
    cy.stub(x, 'prompt').returns("Cypress")
})

});
});
