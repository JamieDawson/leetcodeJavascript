var twoSum = function(nums, target) {
    let hash = {} // Create hash table.

    for(var i = 0; i < nums.length; i++) {
        let current = target - nums[i];

        if(hash[current] !== undefined) {
            return [hash[current], i]
        } else {
            hash[nums[i]] = i;
        }
    }
};

/*
Strategies:
1) Using hash table.
2) Math: target - nums[i] to compare keys if they exist or not.
3) Use Hash Table to return the value which is the index location!

2: 0,
7: 1,
11: 2,
15: 3

return i AND value of key if found
*/