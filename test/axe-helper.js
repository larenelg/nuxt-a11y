// Global helper file (axe-helper.js)
import { configureAxe } from 'jest-axe';

const axe = configureAxe({
  rules: {
    // rules found at https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md
    'region': { enabled: false } // REASON: we're testing individual components, which do not usually have landmarks
  }
})

module.exports = axe