var sumOddLengthSubarrays = function (arr) {
  console.log("test");
  let compare = 1;
  let addAll = 0;

  if (!arr[5]) {
    console.log("NOT HERE");
  }

  for (var i = 0; i < arr.length; i++) {
    if (compare > arr.length) {
      break;
    }
  }
};

const arr = [1, 4, 2, 5, 3];
sumOddLengthSubarrays(arr);

/*
Create compare varible startign at 1.

while compare is less than or equal to the lenght of arr

    
    add 2 to compare variable. 

*/
