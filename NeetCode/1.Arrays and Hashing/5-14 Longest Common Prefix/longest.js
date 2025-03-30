
var longestCommonPrefix = function(strs) {
    let str = []

    for(let i = 0; i < strs[0].length; i++) {
        for(let s of strs) {
            if(i === s.length || s[i] !== strs[0][i]){
                return str.join("");
            } 
        }
        str.push(strs[0][i])
    }
};


/*
create str = ""
Grab first array
    start grabbing every array in strs one at a time and compare the ith space
        if not matching, end this loop by returning str as is
    
    push ith space to store in str.

Improve on:
Getting better at grabbing items in an array.

*/