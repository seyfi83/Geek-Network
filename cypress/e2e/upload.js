/// <reference types="cypress" />

describe('practicing each method', () => {
    
    it('practice upload method', () => {

cy.visit('https://the-internet.herokuapp.com/upload')

cy.get('input[id="file-upload"]').selectFile("cypress/fixtures/cat.jpeg")
cy.get('#file-submit').click()

//cy.get('div[class="example"]').invoke('text').should('include', 'File Uploaded!')
cy.get('.example h3').should('have.text', 'File Uploaded!')

});
});
