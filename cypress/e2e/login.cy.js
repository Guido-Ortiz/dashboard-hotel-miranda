// https://dashboard-hotel-miranda.netlify.app/login

describe('LOGIN TEST', () => {
  it('Succesful logins redirects to /', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('.input').type('admin@hotelmiranda.com').should('have.value', 'admin@hotelmiranda.com')
    cy.get('.password').type('12345').should('have.value', '12345')
    cy.contains('Login').click()
    cy.visit('http://localhost:3000/')
  })
  it('Unsuccesful logins stays at /login', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('.input').type('admins@hotelmiranda.com').should('have.value', 'admins@hotelmiranda.com')
    cy.get('.password').type('123456').should('have.value', '123456')
    cy.contains('Login').click()
    cy.on('window:alert',(t)=>{
      expect(t).to.contains('Wrong credentials');
   })

  
    
  })
})