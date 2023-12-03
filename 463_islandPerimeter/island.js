var islandPerimeter = function (grid) {
  let height = grid.length;
  let width = grid[0].length;

  let count = 0;

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (grid[row][col] == 1) {
        count += 4;

        if (row > 0 && grid[row - 1][col] == 1) count--; //checking up
        if (row < height - 1 && grid[row + 1][col] == 1) count--; //checking down
        if (grid[row][col - 1] == 1) count--; // checking left
        if (grid[row][col + 1] == 1) count--; // checking right
      }
    }
  }
  return count;
};

let grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

islandPerimeter(grid);

/*
counter = 0; // counts  the walls.

loop through all 4 layers   
    2nd loop for numbers in selected array layer to find the 1's in the layer.
        if 1
            check left, if 0    
                counter++
            check above, if 0   
                counter++
            check right, if 0
                counter++
            check below, if 0
                counter++

return counter

*/
