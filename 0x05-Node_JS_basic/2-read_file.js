// Create a function named countStudents. It should accept a path in argument
// The script should attempt to read the database file synchronously
// If the database is not available, it should throw an error with the text Cannot load the database
// If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
// It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
// CSV file can contain empty lines (at the end) - and they are not a valid student!

const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8')
        const students = data.split('\n')
        .filter((student) => student.length > 0)
        .map((student) => student.split(','));
        students.shift();
        console.log(`Number of students: ${students.length}`);

        const fieldCount = {}; // create map to store students by field

        students.forEach((student) => {
            if (!fieldCount[student[3]])
                fieldCount[student[3]] = [];
            fieldCount[student[3]].push(student[0]);
        });

        Object.keys(fieldCount).forEach((field) => {
            console.log(`Number of students in ${field}: ${fieldCount[field].length}. List: ${fieldCount[field]}`)
        });

    }
    catch (error) {
        console.log(error);
        throw new Error('Cannot load the database');
      }
}

module.exports = countStudents;