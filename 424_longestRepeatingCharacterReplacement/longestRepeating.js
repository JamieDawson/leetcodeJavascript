var addToMap = (key, myMap) => {
  if (!myMap.has(key)) {
    myMap.set(key, 1);
  } else {
    let value = myMap.get(key);
    myMap.set(key, value + 1);
  }
};

var characterReplacement = function (s, k) {
  let myMap = new Map();
  let highestFrequency = 0; //most frequent letter
  let longest = 0; //longest valid window
  let left = 0;
  let right = 0;

  while (right < s.length) {
    let currentCharacter = s[right];
    addToMap(currentCharacter, myMap);

    highestFrequency = Math.max(highestFrequency, myMap.get(currentCharacter));

    while (right - left + 1 - highestFrequency > k) {
      const leftCharacter = s.charAt(left);
      let leftValue = myMap.get(leftCharacter);
      myMap.set(leftCharacter, leftValue - 1);
      left++;
    }

    longest = Math.max(longest, right - left + 1);
    right++;
  }

  return longest;
};

let s = "ABAB";
let k = 2;

characterReplacement(s, k);

/*
Add values to a hashmap.

*/
