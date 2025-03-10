const { defineConfig } = require("cypress");
const { Client } = require('pg');

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on('task', {
        async queryDatabase({ query }) {
          const client = new Client({
            user: 'world',
            host: '0.0.0.0',
            database: "world-db",
            password: 'world123',
            port: 5432,
          });
          try {
            await client.connect();
            const res = await client.query(query);
            await client.end();
            return res;
          }
          catch (e) {
            throw e;
          }
          finally {
            await client.end();
          }
        },
      });
    },
  },
});
