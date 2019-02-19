context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('renders the app', () => {
    cy.get('#concepts')
      .find(':nth-child(2) > ul')
      .click()
    cy.get('h2').should('contain', 'Zesty Colors')
  })
})
