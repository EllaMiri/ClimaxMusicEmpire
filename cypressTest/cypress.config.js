const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: "false",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },
});
