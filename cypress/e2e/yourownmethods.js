describe('practicing each method', () => {


    beforeEach(() => {
        cy.visit('/')

        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()

    })


    it('should do all the testing for admin page', () => {
        cy.viewport(2080, 2000)
        cy.selectCategory('Admin')




        // cy.products('Nationalities')


    });
})