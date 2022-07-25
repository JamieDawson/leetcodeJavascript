var merge = function (nums1, m, nums2, n) {
  const hash = {};
  let fill = 0;

  //add positive numbers from nums1 to hash
  for (let char of nums1) {
    if (char > 0) {
      if (hash[char]) hash[char]++;
      else hash[char] = 1;
      fill++;
    }
  }

  //add positive numbers from nums2 to hash
  for (let char of nums2) {
    if (char > 0) {
      if (hash[char]) hash[char]++;
      else hash[char] = 1;
      fill++;
    }
  }
  console.log(fill);

  if (fill < m + n) {
    hash[0] = m + n - fill;
    console.log("test");
    fill++;
  }

  //empty nums1.
  for (var i = 0; i < m + n; i++) {
    nums1.pop();
  }

  for (const key in hash) {
    let i = 0;
    while (i < hash[key]) {
      nums1.push(key);
      i++;
    }
  }
  console.log(nums1);
  return nums1;
};

let nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
let m = 6;
let nums2 = [1, 2, 2];
let n = 3;

merge(nums1, m, nums2, n);

/*
Logic:
1) Create a hash table.
2) Loop through numbers 1 and count the numbers. Example: if nums1 is [1, 1, 1, 2] then the hash table should be 
{1: 3,
2: 1}
3) Set nums1 to empty
4) push all numbers from smallest to largest in the array.
5) return array.

*/
