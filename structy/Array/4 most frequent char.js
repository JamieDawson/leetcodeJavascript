const mostFrequentChar = (s) => {
  let hashMap = {};

  for (let char of s) {
    if (!hashMap[char]) {
      hashMap[char] = 1;
    } else {
      hashMap[char] += 1;
    }
  }

  let best = null;

  for (let char of s) {
    if (best === null || hashMap[char] > hashMap[best]) {
      best = char;
    }
  }
  return best;
};

mostFrequentChar("bookeeper"); // -> 'e'
