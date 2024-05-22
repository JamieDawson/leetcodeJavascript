/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let counter = 0;

  while (students.length !== 0) {
    if (counter === students.length) {
      return students.length;
    } else if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      counter = 0;
    } else if (students[0] !== sandwiches[0]) {
      let backOfTheLine = students.shift();
      students.push(backOfTheLine);
      counter++;
    }
  }

  return 0;
};
