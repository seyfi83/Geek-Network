/// <reference types="cypress" />

describe('practicing each method', () => {
    
    it('practice tabs method', () => {

cy.visit('https://www.google.com/')

cy.get('#APjFqb').type('A')

//cy.contains('.G43f7e li', 'Amazon').click()  //click Amazon from the list

//cy.get('.G43f7e li').last().click()        //click the last element from the list
cy.get('.G43f7e li').first().click()        //click the first element from the list
});
});
