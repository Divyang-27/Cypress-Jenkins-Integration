const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config
    },
    specPattern:'cypress/integration/test/testSauceLab.cy.js'
  },
});
