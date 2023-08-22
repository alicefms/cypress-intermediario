
describe('Login', () => {
  it('login com sucesso', () => {
    cy.login()
    cy.get('.header-user-avatar').should('be.visible')

  })
})