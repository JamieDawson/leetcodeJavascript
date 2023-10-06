//Unoptimized Solution
/*
SOLUTION: A loop in a loop to compare minimum height.
TIME: O(n^2)
SPACE: O()
*/

var maxArea = function (height) {
  let res = 0;

  for (let l = 0; l < height.length; l++) {
    for (let r = l + 1; r < height.length; r++) {
      let area = (r - l) * Math.min(height[l], height[r]);
      res = Math.max(res, area);
    }
  }

  return res;
};

/*
OPTIMIZED SOLUTION
Use two pointers to meet in the middle.
To find the area of a square, use (r - l) * the smallest of l or r.

*/

var maxArea = function (height) {
  let res = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    let totalWater = (r - l) * Math.min(height[l], height[r]);
    res = Math.max(res, totalWater);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return res;
};
