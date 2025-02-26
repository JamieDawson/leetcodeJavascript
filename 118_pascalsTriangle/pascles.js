let generate = (numRows) => {
  if (numRows === 0) return [];

  if (numRows === 1) {
    return [[1]];
  }

  let result = [[1]];

 for(let count = 1; count < numRows; count++) {
  let grabArray = result[count - 1];
  let myCopy = [0, ...grabArray, 0];

  

 }

  console.log(result);
  return result;
};

let numRows = 5;
generate(numRows);
