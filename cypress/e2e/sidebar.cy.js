describe('SIDEBAR ROUTES TESTS', () => {
  it('Click on Booking navigates to /bookings', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('.input').type('admin@hotelmiranda.com').should('have.value', 'admin@hotelmiranda.com')
    cy.get('.password').type('12345').should('have.value', '12345')
    cy.contains('Login').click()
    cy.visit('http://localhost:3000/')
    cy.get('[href="/bookings"] > .sc-csDkEv > h4').click()
    cy.visit('http://localhost:3000/bookings')
  })
  it('Click on Rooms navigates to /rooms', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('.input').type('admin@hotelmiranda.com').should('have.value', 'admin@hotelmiranda.com')
    cy.get('.password').type('12345').should('have.value', '12345')
    cy.contains('Login').click()
    cy.visit('http://localhost:3000/')
    cy.get('[href="/rooms"] > .sc-csDkEv > h4').click()
    cy.visit('http://localhost:3000/rooms')
  })
  it('Click on Contact navigates to /contact', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('.input').type('admin@hotelmiranda.com').should('have.value', 'admin@hotelmiranda.com')
    cy.get('.password').type('12345').should('have.value', '12345')
    cy.contains('Login').click()
    cy.visit('http://localhost:3000/')
    cy.get('[href="/contact"] > .sc-csDkEv > h4').click()
    cy.visit('http://localhost:3000/contact')
  })
  it('Click on Users navigates to /users', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('.input').type('admin@hotelmiranda.com').should('have.value', 'admin@hotelmiranda.com')
    cy.get('.password').type('12345').should('have.value', '12345')
    cy.contains('Login').click()
    cy.visit('http://localhost:3000/')
    cy.get('[href="/users"] > .sc-csDkEv > h4').click()
    cy.visit('http://localhost:3000/users')
  })
})