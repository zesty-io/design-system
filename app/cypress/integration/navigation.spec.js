context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('renders the app', () => {
    cy.get('#concepts')
      .find('> span')
      .find('atoms')
      .click()
  })
})
