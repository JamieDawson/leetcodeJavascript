var topKFrequent = function(nums, k) {
    let count = {};
    let freq = Array.from({length: nums.length + 1}, () => [])

    for(let val of nums) {
        if(!count[val]){
            count[val] = 1;
        } else {
            count[val]++
        }
    }
    
    for(let [key, value] of Object.entries(count)) {
       // console.log(key,value)
        freq[value].push(parseInt(key))
    }
   
    let res = []
    for(let i = freq.length - 1; i > 0; i--) {
        for(let val of freq[i]) {
            res.push(val)
        }
        if(res.length === k) break;
    }
    console.log(res)
    return res;
};

/*
Creat count hash table
{1: 3, 2: 2, 3:1}

Create freq (bucket array) using from() with length 
[[],[3],[2],[1],[],[],[]]

res = []
loop backwards from end of freq.
    loop size of freq[i] (skips empty arrays)
        push val in res
    if res lenght === k   BREAK;

return res.
*/