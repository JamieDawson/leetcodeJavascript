var findThePrefixCommonArray = function (A, B) {
  let hash = {};
  let result = [];
  let singleValueForResult = 0;

  for (var i = 0; i < A.length; i++) {
    populateHash(hash, A[i]);
    populateHash(hash, B[i]);
    singleValueForResult = hashHasMoreThanOne(hash);
    result.push(singleValueForResult);
  }
  // console.log(hash);
  console.log(result);
  return result;
};

var populateHash = (hash, number) => {
  if (!hash[number]) {
    hash[number] = 1;
  } else {
    hash[number]++;
  }
  return hash;
};

var hashHasMoreThanOne = (hash) => {
  let count = 0;
  for (let number of Object.values(hash)) {
    if (number >= 2) count++;
  }
  return count;
};

let A = [1, 3, 2, 4];
let B = [3, 1, 2, 4];

findThePrefixCommonArray(A, B);
