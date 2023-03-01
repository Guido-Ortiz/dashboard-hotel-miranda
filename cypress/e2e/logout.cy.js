describe('LOGOUT', () => {
  it('Succesful logins redirects to /', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('.input').type('admin@hotelmiranda.com').should('have.value', 'admin@hotelmiranda.com')
    cy.get('.password').type('12345').should('have.value', '12345')
    cy.contains('Login').click()
    cy.visit('http://localhost:3000/')
  })
  it('when clicking in, navigates to /login', () => {
    // cy.visit('http://localhost:3000/')
    cy.get('.logout').click()
    // cy.visit('http://localhost:3000/login')
  })
})










// const baseUrlMatcher = new RegExp('localhost:3000/$');

// describe('Log out user properly', () => {
//   // log in before each test:
//   beforeEach(() => {
//     cy.login('test@email.com', 'password');
//   });
//   it('can select dropdown and perform logout action', () => {
//     // check if we are logged in:
//     cy.url().should('contains', '/c/');
//     cy.get('div[data-testid="main-menu-settings"]').click();
//     cy
//       .get('.Popover-body ul li')
//       .first()
//       .click();
//     cy.url().should('match', baseUrlMatcher);
//   });
//   it('/logout url should work as well', () => {
//     cy.url().should('contains', '/c/');
//     cy.visit('/log-out');
//     cy.url().should('match', baseUrlMatcher);
//   });
//   it('should clear auth token from local storage', () => {
//     cy.url().should('contains', '/c/');
//     cy.visit('/logout');
//     cy.url().should('match', baseUrlMatcher);
//     const user = JSON.parse(window.localStorage.getItem('reduxPersist:user'));
//     assert.isUndefined(user.token, 'refreshToken is undefined');
//   });
// });