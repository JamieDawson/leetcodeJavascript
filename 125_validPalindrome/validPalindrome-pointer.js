function isPalindrome(s: string): boolean {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let l = 0;
  let r = s.length - 1;

  while (l <= r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}

/*
Update string by lowercasing & removing spaces

use 2 pointers to check left & right.

*/
