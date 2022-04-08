var finalValueAfterOperations = function(operations) {
 
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