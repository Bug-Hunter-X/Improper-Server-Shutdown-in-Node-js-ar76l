const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle graceful shutdown
server.on('close', () => {
  console.log('Server closed gracefully');
});

const gracefulShutdown = () => {
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

// Solution: This improved code uses event listeners for `SIGINT` and `SIGTERM` signals to gracefully shut down the server.