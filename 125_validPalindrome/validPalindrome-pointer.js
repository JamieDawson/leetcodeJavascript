// const validPalindrome = (str) => {
//   let palString = str.replace(/[^\w]/gi, "").toLowerCase();
//   let left = 0;
//   let right = palString.length - 1;
//   console.log(palString);

//   while (left < right) {
//     if (palString[left] !== palString[right]) {
//       console.log(palString[left]);
//       console.log(palString[right]);
//       console.log("FALSE");
//       return false;
//     }
//     left++;
//     right--;
//   }
//   console.log("true");
//   return true;
// };

var isPalindrome = function (s) {};

let str = "aa--aa";
isPalindrome(str);

//
//TIME: O(n + n) --> O(n) - Two different loops.
//SPACE: O(n) - create array for letters

// var isPalindrome = function(s) {
//   s = s.toLowerCase();
//   let justLetters = []; //O(n)

//   for(var i = 0; i < s.length; i++) {  //O(n)
//       if(s[i] >= 'a' && s[i] <= 'z') {
//           justLetters.push(s[i]) //O(1)
//       }
//   }

//   let left = 0;
//   let right = justLetters.length - 1;

//   while(left <= right) { //O(n)
//       if(justLetters[left] !== justLetters[right]) {
//           return false;
//       }
//       left++;
//       right--;
//   }

//   return true;
// };
