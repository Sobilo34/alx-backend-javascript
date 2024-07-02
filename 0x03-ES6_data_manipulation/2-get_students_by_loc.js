export default function getStudentsByLocation(list, city) {
  // returns a filtered list of students who are in the same city
  return list.filter((item) => item.location === city);
}
