'use strict';

const http = require('http');
const { topics, demo } = require('./handlers');

const { NODE_ENV, HTTP_PORT, HTTP_HOST } = process.env;

const server = http.createServer(async (_, res) => {
  
  const urls = await topics();
  const demos = await Promise.all(urls.map(e => demo(e)));
  
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(HTTP_PORT, HTTP_HOST, () => {
  console.info(`Running (${NODE_ENV}) at http://${HTTP_HOST}:${HTTP_PORT}`);
});