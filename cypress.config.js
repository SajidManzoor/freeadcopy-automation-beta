const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin, } = require("@badeball/cypress-cucumber-preprocessor");
const { preprocessor, } = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "rizcte",
  defaultCommandTimeout: 30000,

  e2e: {
    baseUrl: 'https://freeadcopy.com/',
    setupNodeEvents,
    experimentalRunAllSpecs: true,
    //specPattern: 'cypress/Integration/*.js'
    specPattern: 'cypress/Integration/FeatureFiles/*.feature',
    experimentalStudio: true,
    experimentalSessionAndOrigin: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    watchForFileChanges: false,
    experimentalRunAllSpecs: true,
  },
});
