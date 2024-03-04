const http = require('http');
// Create web server
// 1. Create a web server
// Create a server
const server = http.createServer((req, res) => {
    // Handle incoming requests
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

// Start the server
server.listen(3000, 'localhost', () => {
    console.log('Server is running on http://localhost:3000');
});
