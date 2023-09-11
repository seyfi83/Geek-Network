/// <reference types="cypress" />

describe('practicing each method', () => {
    
    it('practice table method', () => {

cy.visit('https://tablepress.org/demo/')

cy.contains('[class="row-hover"] td', 'Barry').should('have.text', 'Barry')

cy.get('[class="row-hover"] td').first().should('contain', 'Gloria')

});
});
