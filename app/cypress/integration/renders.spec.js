context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('renders the app', () => {
    cy.get('h1').should('contain', 'Zesty.io Component Library')
  })
})
