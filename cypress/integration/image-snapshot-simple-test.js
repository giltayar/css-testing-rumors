/* eslint-env mocha */
/* global cy */
/// <reference types="cypress" />

it('should test with image-snapshot-simple-test', () => {
  cy.viewport(1024, 768)

  cy.visit('http://localhost:3000')
  cy.get('#searchBar').type('test')

  cy.matchImageSnapshot('home-page')
})
