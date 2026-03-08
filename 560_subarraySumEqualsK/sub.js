function subarraySum(nums: number[], k: number): number {
  const map = new Map<number, number>();

  // base case: prefix sum of 0 appears once
  map.set(0, 1);

  let sum = 0;
  let count = 0;

  for (const num of nums) {
    // update running prefix sum
    sum += num;

    // check if a previous prefix sum exists that would make a subarray sum to k
    if (map.has(sum - k)) {
      count += map.get(sum - k)!;
    }

    // update how many times we've seen this prefix sum
    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1);
    } else {
      map.set(sum, 1);
    }
  }

  console.log(map)

  return count;
}