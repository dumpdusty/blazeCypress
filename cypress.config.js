const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: `https://www.demoblaze.com/`,
    excludeSpecPattern: [`cypress/e2e/1-getting-started/*`, `cypress/e2e/2-advanced-examples/*`],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})
