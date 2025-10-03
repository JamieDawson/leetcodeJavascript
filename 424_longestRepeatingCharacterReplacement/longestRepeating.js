function characterReplacement(s: string, k: number): number {
  let left = 0;
  let maxLetterFound = 0;
  let myHash = {};
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    if (!myHash[s[right]]) {
      myHash[s[right]] = 1;
    } else {
      myHash[s[right]]++;
    }

    if (myHash[s[right]] > maxLetterFound) {
      maxLetterFound = myHash[s[right]];
    }

    while (right - left + 1 - maxLetterFound > k) {
      myHash[s[left]]--;
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
