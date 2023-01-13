// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

Cypress.on('uncaught:exception', (e) => {
  console.error(e)
  debugger
  if (e.cause) {
    console.error('caused by', e.cause)
  }
})

it('reports the full error cause', () => {
  cy.visit('index.html')
})
