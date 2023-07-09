const anagrams = (s1, s2) => {
  let hashMap = {};

  for (var i = 0; i < s1.length; i++) {
    if (!hashMap[s1[i]]) {
      hashMap[s1[i]] = 1;
    } else {
      hashMap[s1[i]] += 1;
    }
  }

  for (var i = 0; i < s2.length; i++) {
    if (!hashMap[s2[i]]) return false;
    if (hashMap[s2[i]] === 0) return false;
    if (hashMap[s2[i]] >= 1) hashMap[s2[i]] -= 1;
  }
  return true;
};

anagrams("cats", "tocs"); // -> false
