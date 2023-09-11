import hr from "../support/pom/loginpage"
import srch from "../support/pom/searchMethod"

describe('practicing custom  method', () => {

    const login = new hr
    
    const search = new srch 


    before(() => {
        cy.fixture('users').then((data) => {
            globalThis.data = data
        })
    })
    it('should login the page regular', () => {
        login.visitthepage(data.username, data.password)
      
        
        search.searchCategory("Time")
    });
})