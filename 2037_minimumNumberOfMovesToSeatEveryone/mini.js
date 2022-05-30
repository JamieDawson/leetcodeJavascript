var minMovesToSeat = function(seats, students) {
    let moves = 0;
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b)
    
    for(var i = 0; i < seats.length; i++) {
        moves += Math.abs(seats[i] - students[i])
    }

    return moves;
};

let seats = [4,1,5,9];
let students = [1,3,2,6];

minMovesToSeat(seats, students)


/*
Use .sort() on seast and students
varaible for total moves

Loop through student array
    compar student value to seat value.
        
            
return moves
*/

/*
Time: O(n log(n)) since we are using sort() function.
Space: O(1), just making a variable to store moves.

*/