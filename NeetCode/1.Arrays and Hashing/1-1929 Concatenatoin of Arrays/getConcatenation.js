var getConcatenation = function(nums) {
    let ans = new Array(nums.length * 2)
    let i = 0;
    let j = Math.floor(ans.length / 2)
    

    while(j < ans.length) {
        //console.log("j is: " + j)
        ans[i] = nums[i]
        ans[j] = nums[i];
        i++
        j++;
    }
    return ans
};

/*

Time Complexity: O(n) - Going through num once
Space Complexity O(n) + O(n) --> O(n) - Drop constants


Important bits of code:
1. Using Math.floor() to avoid numbers being .5
2. Two pointer method

*/