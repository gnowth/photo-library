describe('page-landing', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('accessibility', () => {
    it('contains an h1', () => {
      cy.get('h1').should('have.length', 1)
    })
  })
})
