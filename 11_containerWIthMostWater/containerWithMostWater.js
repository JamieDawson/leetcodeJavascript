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

function maxArea(height: number[]): number {
  let container = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let smallest = Math.min(height[left], height[right]);

    container = Math.max(container, smallest * (right - left));

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return container;
}

/*
2 poitner method but using math of right - left.


*/
