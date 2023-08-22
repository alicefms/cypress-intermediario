import {faker} from '@faker-js/faker'

describe('Criação de projeto', () => {
    
    beforeEach(() => {
        cy.login()
    });

    it('criacao de projeto com sucesso', () => {
        const nameProject = faker.random.words(2)
        cy.gui_createProject(nameProject)
        cy.get('h1').contains(nameProject).should('be.visible')
    });
});