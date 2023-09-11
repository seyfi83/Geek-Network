/// <reference types="cypress" />

describe('practicing each method', () => {
    
    it('practice each methodit', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click() 

        cy.xpath('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').each((x)=>{
            if(x.text().includes("Recruitment")){
                cy.wrap(x).click()
            }
        }) 
        cy.xpath('//ul[@data-v-5327b38a]//li').each((x)=>{
            if(x.text().includes("Vacancies")){
                cy.wrap(x).click()
            }
        })
    });

    /* Task 1:
Login to HR page, click on Admin using each method, then click
on Nationalities using each method and then do assertion using invoke method
    */
it.only('task1', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click() 

        cy.xpath('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').each((x)=>{
            if(x.text().includes("Admin")){
                cy.wrap(x).click()
            }
        }) 
        cy.xpath('//a[@class="oxd-topbar-body-nav-tab-item"]').each((x)=>{
            if(x.text().includes("Nationalities")){
                cy.wrap(x).click()
            }
        cy.xpath('//h6[@class="oxd-text oxd-text--h6 orangehrm-main-title"]').invoke('text').as('Nationalities')  
        cy.get('@Nationalities').should('includes', 'Nationalities')   
        })
        /* Task 2:
        Login to HR page, click on Admin using each method, then click
        on Corporate Branding using each method and then do assertion using invoke method
        */
       
});
});
it.only('task2', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('[name="username"]').type('Admin')
      cy.get('[name="password"]').type('admin123')
      cy.get('[type="submit"]').click() 

      cy.xpath('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').each((x)=>{
          if(x.text().includes("Admin")){
              cy.wrap(x).click()
          }
      }) 
      cy.get('.oxd-topbar-body-nav li').each((x)=>{
          if(x.text().includes("Corporate Branding")){
              cy.wrap(x).click()
          }
  cy.get('.oxd-text.oxd-text--h6.orangehrm-main-title').invoke('text').should('includes', 'Corporate Branding')
  //  cy.get('Corporate Branding').should('includes', 'Corporate Branding')
      });
    });

