/* eslint-env mocha */
/// <reference /* eslint-env mocha */
/* global cy */
/// <reference types="cypress" />

it('should test with eyes', () => {
  cy.visit('http://localhost:3000')

  cy.eyesOpen({
    appName: 'Testing Bookstore',
    batchName: 'Testing Bookstore',
    testName: 'Home Page',
  })

  cy.eyesCheckWindow('home page')

  cy.eyesClose()
})
