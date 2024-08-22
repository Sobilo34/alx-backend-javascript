const express = require('express');

const app = express();
const port = 1245;

const countStudents = require('./count_students');

const database = process.argv.length > 2 ? process.argv[2] : '';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(database.toString()).then((output) => {
    const outString = output.slice(0, -1);
    res.end(outString);
  }).catch(() => {
    res.statusCode = 404;
    res.end('Cannot load the database');
  });
});

app.listen(port, () => {
  console.log(`The Express server is running on http://127.0.0.1:${port}/`);
});

module.exports = app;
