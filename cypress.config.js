const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://echo-serv.tbxnet.com/explorer/#/QA/get_qa_test1",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
