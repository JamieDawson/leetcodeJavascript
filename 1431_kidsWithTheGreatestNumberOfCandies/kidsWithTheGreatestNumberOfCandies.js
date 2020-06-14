var kidsWithCandies = function(candies, extraCandies) {
    var returnedArray = [];
    var largestNum = candies[0]
    
    for (var i = 0; i < candies.length; i++){
        if (candies[i] > largestNum)
            largestNum = candies[i];
    }
    
    for (var i = 0; i< candies.length; i++){
        if (candies[i] + extraCandies >= largestNum){
            returnedArray.push(true)
        } else {
            returnedArray.push(false);
        }       
    }
    return returnedArray;
};

/*
Time Complexity:  O(n^2) because we're going through the array twice.

Space Complexity: O(n) because we're creating an array of the exact size of the array we pass in.

Solution for improving Space Complexity: Replace the number in candies[i] with true/false to change it to O(1)


*/
