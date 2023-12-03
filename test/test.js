const solution = (pot) => {
  //create a list of areas where a zero appears at the top.
  let zeroArray = [];
  let top = pot[0];

  for (var i = 0; i < top.length; i++) {
    if (top[i] === 0) {
      zeroArray.push([0, i]);
    }
  }

  if (zeroArray.length === 0) {
    return false;
  }
  //Use that list to use DFS on it to find the bottom

  //Use 2 loops to go through row and colum with the zeros list made above
  for (var i = 0; i < zeroArray.length; i++) {
    const [row, col] = zeroArray[i];
    if (exploreDFS(pot, row, col) === true) {
      return true;
    }
  }
};

const exploreDFS = (pot, row, col) => {
  if (row < 0 || col < 0 || row >= pot.length || col >= pot[0].length)
    return false;

  //check if on last row to see if I see a zero. Return TRue

  exploreDFS(pot, row - 1, col);
  exploreDFS(pot, row + 1, col);
  exploreDFS(pot, row, col - 1);
  exploreDFS(pot, row, col + 1);

  return true;
};
let pot = [
  [1, 0],
  [1, 1],
];
solution(pot);
