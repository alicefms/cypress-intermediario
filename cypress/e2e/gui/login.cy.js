
describe('Login', () => {
  it('login com sucesso', () => {
    cy.visit('http://localhost')
    cy.get('#user_login').type('root')
    cy.get('#user_password').type('Senh4fake')
    cy.get('#new_user > .submit-container > .btn').click()
    cy.get('.header-user-avatar').should('be.visible')

  })
})