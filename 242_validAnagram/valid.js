var isAnagram = function (s, t) {
  let myHash = {};

  if (s.length !== t.length) {
    return false;
  }

  for (const letter of s) {
    console.log(letter);
    if (!myHash[letter]) {
      myHash[letter] = 1;
    } else {
      myHash[letter] += 1;
    }
  }

  for (const letter of t) {
    console.log(myHash[letter]);
    if (myHash[letter] === undefined || myHash[letter] <= 0) {
      return false;
    } else {
      myHash[letter] -= 1;
    }
  }

  return true;
};

let s = "rat";
let t = "car";

console.log(isAnagram(s, t));

/*
1. Make a hashtable
2. loop through s. Check if value exist, if it DOESN'T, add to to hashtable. Otherwise increase it's value by one.
3. Loop through t. Check if value exist or is greater than 0. if it DOESN'T, return false. Otherwise decrease value by one.
4. return true at the very end because both loops passed.

*/
