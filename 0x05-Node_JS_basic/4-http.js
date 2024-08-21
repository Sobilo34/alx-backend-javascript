const { createServer } = require('http');

const port = 1245;
const hostname = '127.0.0.1';

const app = createServer((req, res) => {
  res.end('Hello Holberton School!');
});

// Start the server and listen on the defined port
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
