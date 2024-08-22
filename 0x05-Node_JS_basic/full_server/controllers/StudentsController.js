const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    try {
      const data = await readDatabase(process.argv[2]);
      let response = 'This is the list of our students';
      const fields = Object.keys(data);
      fields.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      fields.forEach((field) => {
        response += `\nNumber of students in ${field}: ${
          data[field].length
        }. List: ${data[field].join(', ')}`;
      });
      res.statusCode = 200;
      res.send(response);
    } catch (err) {
      res.statusCode = 500;
      res.send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    res.statusCode = 200;
    const { major } = req.params;
    if (major === 'CS' || major === 'SWE') {
      try {
        const data = await readDatabase(process.argv[2]);
        res.statusCode = 200;
        res.send(`List: ${data[major].join(', ')}`);
      } catch (error) {
        res.statusCode = 500;
        res.send('Cannot load the database');
      }
    } else {
      res.statusCode = 500;
      res.send('Major parameter must be CS or SWE');
    }
  }
}

export default StudentsController;
