describe('Go To Climax Music Empire', () => {
  //goes to Climax Music Empire and clicks on the links in the header
  it('click the links in the header', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('News').click()
  })
  it('Visits Climax Music Empire', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Media').click()
  })
  it('Visits Climax Music Empire', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Contact')
  })
  it('Visits Climax Music Empire', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Events').click()
    cy.contains('Artists').click()
  })
  it('Visits Climax Music Empire', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Artists').click()
  })
})

describe('Go To Climax Music Empire', () => {
  //goes to Climax Music Empire and clicks on the links in the header
  it('Clicks the links in the footer', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('NEWS').click()
  })

    it('Visits Climax Music Empire', () => {
      cy.visit('http://localhost:3000/')

      cy.contains('ARTISTS').click()
    })
  it('Visits Climax Music Empire', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('CONTACT US').click()
  })
  it('Visits Climax Music Empire', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('EVENTS').click()
  })
})
