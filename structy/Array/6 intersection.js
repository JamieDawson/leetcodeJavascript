const intersection = (a, b) => {
  let results = [];
  let mySet = new Set(a);

  for (let num of b) {
    if (mySet.has(num)) {
      results.push(num);
    }
  }
  console.log(results);
  return results;
};

intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]); // -> [2,6]
