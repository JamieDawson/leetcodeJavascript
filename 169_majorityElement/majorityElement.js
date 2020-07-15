var majorityElement = function(nums) {
    var occurances = {};
    var curNumber;
    var maxNumber = nums[0];
    
    for (var i = 0; i < nums.length; i++){
       
        curNumber = nums[i];
        
        if(occurances[curNumber] !== undefined){
            occurances[curNumber]++;
        } else {
            occurances[curNumber] = 1;
        }
        console.log(occurances[curNumber])
        if (occurances[curNumber] > occurances[maxNumber]){
            console.log("wut")
            maxNumber = curNumber;
        }
    }
  
    return maxNumber;
};

majorityElement([3,2,2,2,2])

//