let createS1Hash = (s1) => {
  let s1Hash = {};
  for (let char of s1) {
    s1Hash[char] = (s1Hash[char] || 0) + 1;
  }
  return s1Hash;
};

const updateS2Hash = (s2Hash, s2, i, j) => {
  // Add new character entering the window (j-th position)
  s2Hash[s2[j]] = (s2Hash[s2[j]] || 0) + 1;

  // Remove character that's leaving the window (i-th position)
  if (i >= 0) {
    s2Hash[s2[i]]--;
    if (s2Hash[s2[i]] === 0) delete s2Hash[s2[i]]; // Clean up zero entries
  }

  return s2Hash;
};

const checkMatches = (s1Hash, s2Hash) => {
  for (const key in s1Hash) {
    if (s1Hash[key] !== s2Hash[key]) {
      return false; // Return false if any character frequency mismatches
    }
  }
  return true;
};

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false; // If s1 is longer, s2 can't contain a permutation

  let i = -1; // Start i out of bounds for the first window
  let j = 0;
  let s1Hash = createS1Hash(s1);
  let s2Hash = {}; // Empty hash initially

  while (j < s2.length) {
    s2Hash = updateS2Hash(s2Hash, s2, i, j); // Slide window and update s2Hash

    if (j - i === s1.length) {
      // Window size equals s1's length
      if (checkMatches(s1Hash, s2Hash)) {
        return true; // Found a permutation match
      }
      i++; // Slide window forward
    }
    j++; // Move the end of the window
  }

  return false;
};

// Test the function
let s1 = "ab";
let s2 = "eidbaooo";
console.log(checkInclusion(s1, s2)); // Output: true
