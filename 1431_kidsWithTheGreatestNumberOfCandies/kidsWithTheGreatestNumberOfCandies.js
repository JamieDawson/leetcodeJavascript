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

