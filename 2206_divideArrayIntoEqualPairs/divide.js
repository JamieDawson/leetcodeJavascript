var divideArray = function(nums) {
    let hash = {};

   for(let n of nums) {
       if (hash[n]) hash[n]++
       else
        hash[n] = hash[n] = 1
   }

   var i = 0;
   while(i < Object.values(hash).length) {
        let v = Object.values(hash)[i];
        if (v % 2 !== 0)
            return false;
        i++;
   }
   return true;

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