const { createServer } = require('http');

const port = 1245;
const hostname = '127.0.0.1';
const database = process.argv.length > 2 ? process.argv[2] : '';
const countStudents = require('./count_students');

const app = createServer((req, res) => {
  req.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(database.toString()).then((output) => {
      const outString = output.slice(0, -1);
      res.end(outString);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

// Start the server and listen on the defined port
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
