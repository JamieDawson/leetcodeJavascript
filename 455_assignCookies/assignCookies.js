var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let index = 0;
  let cnt = 0;

  while (index < s.length && cnt < g.length) {
    if (s[index] >= g[cnt]) {
      cnt++;
    }
    index++;
  }

  return cnt;
};

let g = [1, 2, 3];
let s = [1, 2];

console.log(findContentChildren(g, s));

/*
idea 1:
Create a counter varaible
sort the two arrays

have two variables that get the sizes of g and s so you can start at the end of htem.

Loop to check if those values are greater tahn or equal to zero



TIME: O(n log n)
SPACE: O(1) - no extra memory based off size of g or s.

idea 2:


*/
