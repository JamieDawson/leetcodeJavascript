var validPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) {
      return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
    }
    l++;
    r--;
  }
  return true;
};

let isPalindrome = (s, l, r) => {
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

/*
set i = 0;
set j = s.length - 1

loop for i is LESS THAN j
    if i value and j value are NOT the same from s
        return HELPER function ran twice:  s, l+1, r OR s, l, r-1
            both must return true for it to be true


helpfer function: isPalindrome: s,l,r
    basic palindrome function

*/
