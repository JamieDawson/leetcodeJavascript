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
        if (occurances[curNumber] > occurances[maxNumber]){
            maxNumber = curNumber;
        }
    }
  
    return maxNumber;
};

majorityElement([2,3,2])

//