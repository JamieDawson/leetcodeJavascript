var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let mySet = new Set();
  let left = 0;

  for (var right = 0; right < s.length; right++) {
    while (mySet.has(s[right])) {
      mySet.delete(s[left]);
      left++;
    }

    mySet.add(s[right]);

    if (mySet.size > max) {
      max = mySet.size;
    }
  }

  return max;
};

// Time: O(n + n) ==> O(n)
// Space: O(n) Because of the Set(). A string could made entirely of unqiue characters.
