Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
    { cacheSession = true } = {},
  ) => {
    const login = () => {
      cy.visit('/users/sign_in')
  
      cy.get("[data-qa-selector='login_field']").type(user)
      cy.get("[data-qa-selector='password_field']").type(password, { log: false })
      cy.get("[data-qa-selector='sign_in_button']").click()
    }
  
    const validate = ()=>{
        cy.visit('/')
        cy.location('pathname', {timeout:1000}).should('not.eq', '/users/sign_in')
    }
    const options = {
      cacheAcrossSpecs: true,
      validate
    }
  
    if (cacheSession) {
      cy.session(user, login, options)
    } else {
      login()
    }
  })

Cypress.Commands.add('logout', ()=>{
    cy.get('[data-qa-selector="user_menu"]').click()
    cy.get('[data-qa-selector="sign_out_link"]').click()
})

Cypress.Commands.add('gui_createProject', (nameProject)=>{
    cy.visit('/projects/new')
    cy.get('#project_name').type(nameProject)
    cy.get('#blank-project-pane > #new_project > .btn-success').click()
})