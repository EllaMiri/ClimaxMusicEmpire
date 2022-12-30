const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // supportFile: './cypress/support/e2e.js',
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },
});