/// <reference types="cypress" />

describe('practicing each method', () => {
    
    it('practice tabs method', () => {

cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

cy.get('button[onclick="jsAlert()"]').click()

cy.on('window:confirm', (el) => {} )

 cy.get('p[id="result"]').invoke('text').should('includes', 'You successfully clicked an alert') //1. Click For JS Alert Button


 cy.get('button[onclick="jsConfirm()"]').click() //2. Click for JS Confirm

 cy.on('window:confirm', () => {
    return false 
} )
cy.get('button[onclick="jsPrompt()"]').click() //3. Click for JS Prompt
});
});
