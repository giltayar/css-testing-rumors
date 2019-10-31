/* eslint-env mocha */
/// <reference /* eslint-env mocha */
/* global cy */
/// <reference types="cypress" />

it('should test with eyes', () => {
  cy.visit('http://localhost:3000')

  cy.eyesOpen({
    appName: 'Testing at ReactiveConf',
    batchName: 'Testing at ReactiveConf',
    testName: 'Home Page',
    browser: [
      {name: 'chrome', width: 1024, height: 768},
      {name: 'chrome', width: 800, height: 600},
      {name: 'firefox', width: 1920, height: 1080},
      {deviceName: 'iPhone X'},
      {deviceName: 'iPhone XS'},
    ],
  })

  cy.get('#searchBar').type('test')

  cy.eyesCheckWindow('home page')

  cy.eyesClose()
})
