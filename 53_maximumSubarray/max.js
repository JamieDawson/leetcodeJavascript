function maxSubArray(nums: number[]): number {
    let sum = 0;          // running sum of current subarray
    let max = nums[0];    // biggest sum seen so far

    for (let n of nums) { // loop through numbers
        sum += n;         // add current number to running sum

        max = Math.max(max, sum); // update max if this sum is bigger

        if (sum < 0) {    // if running sum becomes negative
            sum = 0;      // reset (negative sums hurt future subarrays)
        }
    }

    return max;           // return the biggest subarray sum found
}