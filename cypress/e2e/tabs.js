/// <reference types="cypress" />

describe('practicing each method', () => {
    
    it('practice tabs method', () => {

cy.visit('https://the-internet.herokuapp.com/windows')
cy.get('.example a').invoke('removeAttr', 'target').click()

});
});
