var moveZeroes = function(nums) {
    var count = 0;

    for (var i = 0; i < nums.length; i++) {
         while (nums[i] == 0){
            nums.splice(i,1);
            count++;
        };
    };
    for (var i = 0; i < count; i++){
        nums.push(0);
    }
};

var testArray = [0,1,0,3,12]
moveZeroes(testArray);