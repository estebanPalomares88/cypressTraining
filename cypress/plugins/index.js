const { Client } = require('pg');

module.exports = (on, config) => {
  on('task', {
    async queryDatabase({ query }) {
      const client = new Client({
        user: 'world',
        host: '0.0.0.0',
        database: "world-db",
        password: 'world123',
        port: 5432,
      });
      await client.connect();
      const res = await client.query(query);
      await client.end();
      return res;
    },
  });
};