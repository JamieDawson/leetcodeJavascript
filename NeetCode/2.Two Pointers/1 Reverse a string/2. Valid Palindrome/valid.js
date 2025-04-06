let checkValue = (val) => {
  if ((val >= "a" && val <= "z") || (val >= "0" && val <= "9")) {
    return true;
  }
  return false;
};

var isPalindrome = function (s) {
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    while (i < j && !checkValue(s[i])) i++;
    while (j > i && !checkValue(s[j])) j--;

    if (s[i] !== s[j]) return false;

    i++;
    j--;
  }

  return true;
};

/*
Lowecase() letters

checkValue() - Create function to check if a value is between a-z and 0-9
i = 0
j = s length

while i < j
    while i is LESS THAN j AND checkValue returns false
        increase i
    while j is GREATER THAN i AND checkValue() returns false
        decrease j

    if s[i] and s[j] are NOT the same
        return false

return true;
*/
