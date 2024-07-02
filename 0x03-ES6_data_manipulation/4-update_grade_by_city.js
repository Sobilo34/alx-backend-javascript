export default function updateGradeByCity(list, city, newGrade) {
  // returns a new list of students with the updated grade
  return list.map((item) => {
    if (item.location === city) {
        return{...item, grade: newGrade};
    }
    return item;
    });
}
export default function updateStudentGradeByCity(students, city, newGrades) {
    // Check if students and newGrades are arrays and are not empty
    if (
      !Array.isArray(students)
      || students.length === 0
      || !Array.isArray(newGrades)
      || newGrades.length === 0
    ) {
      return [];
    }
  
    const studentsByCity = students.filter((std) => std.location === city);
  
    return studentsByCity.map((student) => {
      const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    });
  }
