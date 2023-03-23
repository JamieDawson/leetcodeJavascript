//TIME: O(n) - loop through array once
//SPACE: O(n) - worst case is there's no duplicates.
var removeDuplicates = function (s) {
  let stringConvertedToArray = s.split("");
  let stackArray = [];

  for (var i = 0; i < stringConvertedToArray.length; i++) {
    if (stackArray[stackArray.length - 1] !== stringConvertedToArray[i]) {
      console.log("push");
      stackArray.push(stringConvertedToArray[i]);
    } else if (
      stackArray[stackArray.length - 1] === stringConvertedToArray[i]
    ) {
      console.log("pop");
      stackArray.pop();
    }
  }
  return stackArray.join("");
};

var S = "abbaca";
console.log(removeDuplicates(S));
