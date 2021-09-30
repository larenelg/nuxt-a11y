import { componentA11yCheckRules, terminalLog } from "../../support/cypress-axe-helpers";
import getStorybookComponentUrl from "../../support/storybook-helpers"

describe('Button', () => {
  beforeEach(() => {
    cy.visit(getStorybookComponentUrl('Example/Button', 'Primary'))
    cy.injectAxe(); // IMPORTANT: must come after cy.visit
  })

  it('should be visible', () => {
    cy.get('button').should('be.visible');
    cy.checkA11y(null, componentA11yCheckRules, terminalLog);
  })
})