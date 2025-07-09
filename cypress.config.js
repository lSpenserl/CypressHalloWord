const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
      video: true,
      reporter:'mochawesome',
      reporterOptions: {
        reportDir:'cypress/result',
        overwrite: true,
        html: true,
        json: false,
        timestamp: "yyyymmdd_HHMMss"
      }
  },
});
