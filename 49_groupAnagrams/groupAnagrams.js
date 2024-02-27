var groupAnagrams = function (strs) {
  let res = {};
  for (let str of strs) {
    let count = new Array(26).fill(0);
    for (let char of str) {
      count[char.charCodeAt() - 97]++;
    }

    let key = count.toString("");
    console.log("key is: " + key);
    res[key] ? res[key].push(str) : (res[key] = [str]);
  }
  return Object.values(res);
};
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagrams(strs);

/*
make array called count

key: [1e, 1a, 1t]:
value [eat, tea, ate]

*/
