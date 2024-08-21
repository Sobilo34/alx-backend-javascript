const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = data
          .split('\n')
          .filter((student) => student.trim().length > 0)
          .map((student) => student.split(','));

        students.shift();
        console.log(`Number of students: ${students.length}`);

        const fieldCount = {};

        students.forEach((student) => {
          if (!fieldCount[student[3]]) fieldCount[student[3]] = [];
          fieldCount[student[3]].push(student[0]);
        });

        Object.keys(fieldCount).forEach((field) => {
          console.log(
            `Number of students in ${field}: ${fieldCount[field].length}. List: ${fieldCount[field].join(', ')}`,
          );
        });

        resolve();
      }
    });
  });
}

module.exports = countStudents;
