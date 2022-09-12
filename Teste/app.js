const http = require('http');
const readline = require('readline');

const hostname = '127.0.0.1';

const port = 3000;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

exports.myDateTime = function () {
    return Date();
  };

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("Hora:" + exports.myDateTime());
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Em http://${hostname}:${port}/`);
});