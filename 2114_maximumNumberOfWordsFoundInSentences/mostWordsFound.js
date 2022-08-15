var mostWordsFound = function (sentences) {
  let counter = 1;
  let largest = 1;

  for (var i = 0; i < sentences.length; i++) {
    counter = 1;
    for (var j = 0; j < sentences[i].length; j++) {
      if (sentences[i][j] == " ") {
        counter++;
        if (counter > largest) {
          largest = counter;
        }
      }
    }
  }
  console.log(largest);
  return largest;
};

const sentences = ["please wait", "continue to fight", "continue to win"];
//const sentences = [];
mostWordsFound(sentences);

/*
Create counter variable, set to zero.
Create largest variable and set it to zero.

Check if array is empty, if it is, return zero.
If array isn't empty, increase counter variable by one.

Loop that loops through all sentences in the sentences array.
  
    make counter equal zero
    Loop through selected sentence.
        if empty space, increase counter by 1
          if counter is bigger than largest variable
             set largest to counter


    Return largest variable
*/

/*
Time complexity:  O(n), even though it's a loop in a loop, we are just going through all the arrays once.
Space complexity: O(1), Just creating a counter variable. 

*/
