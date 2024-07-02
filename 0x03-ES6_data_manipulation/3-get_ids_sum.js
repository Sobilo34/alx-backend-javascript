export default function getStudentIdsSum(list) {
  // returns the sum of all student ids
  return list.reduce((sum, list) => sum + list.id, 0);
}
