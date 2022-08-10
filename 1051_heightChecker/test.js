var heightChecker = function (heights) {
  let counter = 0;
  let sorted = [...heights].sort((a, b) => a - b);
  console.log(sorted);

  for (var i = 0; i < heights.length; i++) {
    if (sorted[i] !== heights[i]) {
      counter++;
    }
  }
  console.log(counter);
  return counter;
};

const heights = [1, 1, 4, 2, 1, 3];
heightChecker(heights);

/*
Make array called sorted by sorting heights and storing those values.
Create varible for counter & comparing the differences.

Loop through the heights array and compare
    if "sorted" does not equal "heights"
        increase counter
*/
