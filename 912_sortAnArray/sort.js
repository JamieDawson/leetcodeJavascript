function sortArray(nums: number[]): number[] {
  if (nums.length <= 1) return nums;

  let mid = Math.floor(nums.length / 2);

  let left = sortArray(nums.slice(0, mid));
  let right = sortArray(nums.slice(mid));

  // console.log(left);
  // console.log(right)
  return merge(left, right);
}

let merge = (left: number[], right: number[]): number[] => {
  let i = 0;
  let j = 0;
  let final = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      final.push(left[i]);
      i++;
    } else {
      final.push(right[j]);
      j++;
    }
  }

  return final.concat(left.slice(i), right.slice(j));
};

/*
user MergeSort!

i = 0;
j = 0

while(i < left.len && j < right.len)

*/
