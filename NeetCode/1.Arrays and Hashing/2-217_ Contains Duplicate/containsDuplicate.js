
var containsDuplicate = function(nums) {
    let hash = {};

    for(let val of nums) {
        if(!hash[val]) {
            hash[val] = 1;
        } else {
            return true;
        }
    }
    return false;
};

/*
Strategies:
1) Using hash table


I'm using a JS object, wihch internally uses a hash table for key-value storage.

Time complexity: O(n) - Worse case going through nums once
Space complexity O(n) - Worst case: All values in nums array are unique.

*/