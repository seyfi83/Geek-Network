const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",

    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    
  
  viewportHeight: 1080,
  viewportWidth: 1630,
  retries:{
openMode: 2,

runMode: 1
  },
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true
},
reporter: 'mochawesome'
});
