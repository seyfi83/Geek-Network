/// <reference types="cypress" />
describe('automation store application', () => {
    it('should verify the login of the application', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.url().should('include', 'dashboard')
        cy.xpath("//span[text()='Time']").click()
        cy.xpath("//span[text()=' (3) Records Found']").then((fari) => {
            const expected = ' (3) Records Found'
            const actualfromthewebsite = fari.text()
            cy.log(actualfromthewebsite)
            expect(expected).to.equal(actualfromthewebsite)
        })
        cy.get("[placeholder='Search']").type("Directory")
        cy.xpath("//span[text()='Directory']").click()
        cy.xpath("//span[text()='Directory']").then((fari) => {
            const expected = 'Directory'
            const actualfromthewebsite = fari.text()
            cy.log(actualfromthewebsite)
            expect(expected).to.equal(actualfromthewebsite)
        })
    });


});