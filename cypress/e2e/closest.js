/// <reference types="cypress" />

describe('practicing each method', () => {
    
    it('practice tabs method', () => {

cy.visit('https://the-internet.herokuapp.com/windows')
cy.get('[href="/web/index.php/leave/viewLeaveModule"]').closest('ul').should('have.class', 'oxd-main-menu')


});
});
