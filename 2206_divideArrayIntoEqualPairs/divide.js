var divideArray = function(nums) {
    let hash = {};

    // for(var i = 0; i < nums.length; i++) {
    //     if (!hash[i]) {
    //         hash[i] = 1;
    //     } else
    //     hash[i] = hash[i]++;
    // }
    // console.log(hash)

};

const nums = [3,2,3,2,2,2];
divideArray(nums)

/*
I can use a Hash Table since I only need integers.
Note: Hashmap offers the ability of the keys to be of any data type, unlike Hash Tables where the keys can only be integers and string.

code logic:

variable for hash table
Loop of lenght of array once
    check if that number exist in the hash table
        if it doesn't, add it.
        else, increase value by one

    
Loop thourhg hash table and grab all values 
    if value / 2 does NOT equal 0
        return false

return true

time complexity: O(n): We loop through the array once and the hash table once separately.
space complexity: O(n): 
*/