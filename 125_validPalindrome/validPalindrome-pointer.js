const validPalindrome = (str) => {
  //take str, lowecase it, remove all non alphnumeric characters

  //right pointer
  //left pointer

  //loop while left is less than right.
  //if left value is not equal to right value
  //return false value
  //left++
  //right--
  //return true

  let palString = str.replace(/[^\w]/gi, "").toLowerCase();
  let left = 0;
  let right = palString.length - 1;
  console.log(palString);

  while (left < right) {
    if (palString[left] !== palString[right]) {
      console.log(palString[left]);
      console.log(palString[right]);
      console.log("FALSE");
      return false;
    }
    left++;
    right--;
  }
  console.log("true");
  return true;
};

let str = "A man, a plan, a canal: Panama";
validPalindrome(str);
