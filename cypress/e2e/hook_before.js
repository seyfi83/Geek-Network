describe('practicing each method', () => {
    before(() => {

            cy.fixture('users').then((data) => {
                globalThis.data = data
            })
    })
    
        it('should login the page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
    
        
   
    
    });
})