var islandPerimeter = function(grid) {
    let counter = 0;
    for(var i = 0; i < grid.length; i++) {
        for(var j = 0; j < grid[i].length; j++) {
            if(grid[i][j] == '1') {
               
            }
        }
    }
    console.log(counter);
    return counter;
    
};

let grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]];

islandPerimeter(grid)

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




