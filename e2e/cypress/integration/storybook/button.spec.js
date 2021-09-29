import terminalLog from "../../a11y/cypress-axe-helpers";

// ignore these rules when testing isolated components
const componentOptions = {
  rules: {
    'landmark-one-main': { enabled: false },
    'page-has-heading-one': { enabled: false },
    'region': { enabled: false }
  }
}

describe('Button', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/iframe.html?id=example-button--primary')
    cy.injectAxe(); // IMPORTANT: must come after cy.visit
  })

  it('should be visible', () => {
    cy.get('button').should('be.visible');
    cy.checkA11y(null, componentOptions, terminalLog);
  })
})