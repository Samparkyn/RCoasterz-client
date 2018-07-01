describe('My First Test', function() {
  it('finds the content "type"', function() {
    cy.visit('http://localhost:3000/parks')

    cy.contains('Coasters').click()
    // Should be on a new URL 
    cy.url().should('include', '/coasters')
  })
})