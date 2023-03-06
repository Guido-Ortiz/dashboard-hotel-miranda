describe('LOGOUT', () => {
  it('When clicking in, navigates to /login', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('.input').type('admin@hotelmiranda.com').should('have.value', 'admin@hotelmiranda.com')
    cy.get('.password').type('12345').should('have.value', '12345')
    cy.contains('Login').click()
    cy.visit('http://localhost:3000/')
    cy.get('.logout').click()
    cy.visit('http://localhost:3000/login')
  })
})