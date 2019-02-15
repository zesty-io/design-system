/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('renders the app', () => {
    cy.find('Zesty.io Component Library')
  })
})
