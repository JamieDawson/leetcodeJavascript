var finalValueAfterOperations = function(operations) {
    let counter = 0;

    for(var i = 0; i < operations.length; i++) {
        if(operations[i][0] == '+' && operations[i][2] == 'X' || operations[i][0] == 'X' && operations[i][2] == '+')
            counter++
        if(operations[i][0] == '-' && operations[i][2] == 'X' || operations[i][0] == 'X' && operations[i][2] == '-')
            counter--
    }
   
    return counter
};

let operations = ["--X","X++","X++"];
finalValueAfterOperations(operations)

/*
Variable for total set to 0

while the array has values
    if first letter is X and last letter is + OR if first letter is + and Last letter is X
        increase value of total
    if first letter is X and last letter is - OR if first letter is - and Last letter is X
        decrease value of total

return total

Space: O(1): We're only making a counter variable.
Time: O(n): We're only looping through the array once.
*/