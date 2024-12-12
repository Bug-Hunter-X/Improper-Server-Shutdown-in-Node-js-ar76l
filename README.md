# Improper Server Shutdown in Node.js

This repository demonstrates an uncommon bug in Node.js where a server might not properly close if unexpectedly terminated. This can lead to resource leaks or incomplete responses. The solution involves using the `'close'` event to ensure graceful shutdown.