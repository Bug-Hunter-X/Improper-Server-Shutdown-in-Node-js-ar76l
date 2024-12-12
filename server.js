const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//Uncommon bug: This code will work fine in most cases, but it could lead to unexpected behavior if the server is unexpectedly terminated before the request is fully processed.
//The server might not properly close, leading to resource leaks or incomplete responses. 