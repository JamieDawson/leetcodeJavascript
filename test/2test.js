const grades = [4, -2, 1];

function getAvg(grades) {
  const total = grades.reduce((acc, c) => acc + c, 0);
  return total / grades.length;
}

const average = getAvg(grades);
console.log(average);
