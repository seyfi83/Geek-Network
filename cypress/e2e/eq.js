/// <reference types="cypress" />

describe('practicing each method', () => {
    
    it('practice eq method', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click() 

        cy.get('.oxd-main-menu li').eq(1).click()
        cy.get('.oxd-topbar-body-nav li').eq(3).click()
        cy.get('.oxd-text.oxd-text--h5.oxd-table-filter-title').invoke('text').as('Employee Reports')
        cy.get('@Employee Reports').should('includes', 'Employee Reports')   
    });
});
