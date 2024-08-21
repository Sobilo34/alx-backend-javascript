const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const students = data.split('\n')
      .filter((student) => student.length > 0)
      .map((student) => student.split(','));
    students.shift();
    console.log(`Number of students: ${students.length}`);

    const fieldCount = {}; // create map to store students by field

    students.forEach((student) => {
      if (!fieldCount[student[3]]) fieldCount[student[3]] = [];
      fieldCount[student[3]].push(student[0]);
    });

    Object.keys(fieldCount).forEach((field) => {
      console.log(`Number of students in ${field}: ${fieldCount[field].length}. List: ${fieldCount[field].join(', ')}`);
    });
  } catch (error) {
    console.log(error);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
