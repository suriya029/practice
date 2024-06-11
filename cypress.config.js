const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "s715f5",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern : 'cypress/integration/examples/*.js'
  },
  env: {
    url : 'https://practice.expandtesting.com/'
      },
});
