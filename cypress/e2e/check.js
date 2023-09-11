/// <reference types="cypress" />

describe('practicing each method', () => {
    
    it('practice tabs method', () => {

cy.visit('https://the-internet.herokuapp.com/checkboxes')

cy.get('#checkboxes > :nth-child(1)').check()
cy.get('#checkboxes > :nth-child(3)').uncheck()

});
});
