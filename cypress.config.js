const { defineConfig } = require('cypress')
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mocha',
      overwrite: false,
      html: false,
      json: true,
    },
    baseUrl: 'https://makeup.com.ua/ua/',
    viewportHeight: 1080,
    viewportWidth: 1980,
    setupNodeEvents(on, config) {
      
      on("task", {
        generateUser() {
          return { 
            name: faker.name.firstName(),
            comment: faker.random.words()
          };
        },
        categories() {
          return { 
            title: ['Макіяж', 'Парфумерія'],
          };
        },
        products() {
          return { 
            title: ['Laboratoire Professionnel Eyebrow Pencil', 'MAREVE My Freedom', 'MAREVE Vernal Vibe'],
            search: 'помада'
          };
        }
      });
    },
  },
})
