const fs = require('fs');

async function readDatabase(path) {
  fs.readFile(path, 'utf-8', (err, data) => new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    } else {
      const students = data
        .split('\n')
        .filter((student) => student.trim().length > 0)
        .map((student) => student.split(','));

      const fields = {};

      students.slice(1).forEach((student) => {
        const [firstname, , , field] = student;
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });
      resolve(fields);
    }
  }));
}

module.exports = readDatabase;
