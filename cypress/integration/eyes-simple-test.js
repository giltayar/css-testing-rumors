/* eslint-env mocha */
/// <reference /* eslint-env mocha */
/* global cy */
/// <reference types="cypress" />

it('should test with eyes', () => {
  cy.visit('http://localhost:3000')

  cy.eyesOpen({
    appName: 'Testing at CSSConf',
    batchName: 'Testing at CSSConf',
    testName: 'Home Page',
    browser: [
      {name: 'chrome', width: 1024, height: 768},
      {name: 'chrome', width: 800, height: 600},
      {name: 'chrome', width: 700, height: 600},
      {deviceName: 'iPhone X'},
      {name: 'ie', width: 800, height: 600},
    ],
  })

  cy.get('#searchBar').type('test')

  cy.eyesCheckWindow('home page')

  cy.eyesClose()
})
