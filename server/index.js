const path = require('path');
const jsonServer = require('json-server');

const dbPath = path.resolve(__dirname, '../database/db.json');
const server = jsonServer.create();
const middleware = jsonServer.defaults();
const endpoints = jsonServer.router(dbPath);

server.use(middleware);
server.use('/api', endpoints);
server.listen(3004, () => {
  // eslint-disable-next-line no-console
  console.log('JSON Server listening on port 3004\n');
});
