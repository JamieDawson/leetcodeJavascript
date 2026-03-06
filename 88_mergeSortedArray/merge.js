function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }

    k--;
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}
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
