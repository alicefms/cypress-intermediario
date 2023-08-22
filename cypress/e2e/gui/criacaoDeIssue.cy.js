import { faker } from '@faker-js/faker'

describe('Criação de Issue', () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: faker.random.words(1)}
    }

  beforeEach(() => {
    cy.login()
    cy.gui_createProject(issue.project.name)
  })

  it('criação de Issue com sucesso', () => {
    cy.gui_createIssue(issue)

    cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description)
  })


})