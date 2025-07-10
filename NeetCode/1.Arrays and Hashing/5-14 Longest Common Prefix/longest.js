var longestCommonPrefix = function (strs) {
  let res = "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let val of strs) {
      if (i === val.length || val[i] !== strs[0][i]) {
        return res;
      }
    }
    res += strs[0][i];
  }

  return res;
};

/*
Algorithm: 
Create an empty string.
Loop for the size of the first item in the array.
Grab every time in teh array and compare ith value
	Check if i is equal to current value length OR if the values don’t match


TIME: O(n * m) 
SPACE: O(n)

*/
