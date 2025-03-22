var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    let hash = {} //creating hash table

    for(let val of s) {
        if(!hash[val]) {
            hash[val] = 1;
        } else {
            hash[val]++;
        }
    }

    for(let val of t) {
        if(!hash[val] || hash[val] === 0) {
            return false;
        } else {
            hash[val]--;
        }
    }

    return true;
};


/*
Strategies:
1) Using hash table
2) Compare values in hash table by confirming existance or if at 0 value.

TIME: O(n) + O(n) --> O(n): Drop constants.
SPACE: O(n): Worst case all values are unqiue.
*/