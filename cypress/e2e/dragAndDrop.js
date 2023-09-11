/// <reference types="cypress" />

describe('practicing each method', () => {
    
    it('practice tabs method', () => {

        const dataTransfer = new DataTransfer() 

cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
cy.get('#column-a').trigger('dragstart', {dataTransfer})
cy.get('#column-b').trigger('drop', {dataTransfer})

});
});
