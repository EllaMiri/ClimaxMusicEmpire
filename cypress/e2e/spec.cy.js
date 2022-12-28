describe('Go To Climax Music Empire and Check Links In Header', () => {
  //goes to Climax Music Empire and clicks on the links in the header
  it('click the links in the header', () => {
    cy.visit('http://localhost:3001/')

    cy.contains('News').click()
  })
  it('Visits Climax Music Empire', () => {
    cy.visit('http://localhost:3001/')
    cy.contains('Media').click()
  })
  it('Visits Climax Music Empire', () => {
    cy.visit('http://localhost:3001/')

    cy.contains('Contact')
  })
  it('Visits Climax Music Empire', () => {
    cy.visit('http://localhost:3001/')

    cy.contains('Events').click()
    cy.contains('Artists').click()
  })
  it('Visits Climax Music Empire', () => {
    cy.visit('http://localhost:3001/')

    cy.contains('Artists').click()
  })
})

describe('Check Links In Footer', () => {
  //goes to Climax Music Empire and clicks on the links in the footer
  it('Clicks the links in the footer', () => {
    cy.visit('http://localhost:3001/')

    cy.contains('NEWS').click()
  })

    it('Visits Climax Music Empire', () => {
      cy.visit('http://localhost:3001/')

      cy.contains('ARTISTS').click()
    })
  it('Visits Climax Music Empire', () => {
    cy.visit('http://localhost:3001/')

    cy.contains('CONTACT US').click()
  })
  it('Visits Climax Music Empire', () => {
    cy.visit('http://localhost:3001/')

    cy.contains('EVENTS').click()
  })
})

describe('Click Buttons On Page', () => {
  //goes to Climax Music Empire and click buttons to navigate
  it('Clicks the links in the footer', () => {
    cy.visit('http://localhost:3001/')

    cy.contains('Our artists').click()
  })
})