describe('Comentários', () => {
  beforeEach(() => {
    cy.login('testecypress@testecypress.com', 'testecypress')
  })
  it('Adicionar', () => {
    cy.contains('Global Feed').click()
    cy.get('.preview-link').first().click()
    cy.get('.form-control').type('Sensacional!')
    cy.get('.btn-primary').click()
    cy.contains('Sensacional!')
  })
})
