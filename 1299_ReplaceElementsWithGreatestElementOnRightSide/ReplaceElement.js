var replaceElements = function(arr) {


    let prev = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
      let cur = arr[i];
      arr[i] = prev;
      prev = Math.max(prev, cur);
    }
    console.log(arr)
    return arr;

};

var arr  = [17,18,5,4,6,1]; 
replaceElements(arr)