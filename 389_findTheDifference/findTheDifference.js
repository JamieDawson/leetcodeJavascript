
var findTheDifference = function(s, t) {

var sString = s.split('');
var tString = t.split('');

 for (var i = tString.length - 1; i >= 0; i-- ) {

     let tHold = tString[i];

    for (var j = sString.length - 1; j >= 0; j--){
        if (sString[j] == tHold) {
            tString.pop().indexOf()
            break;
        }

    }

 }

 console.log(tString)

};

let s = "abcd";
let t = "abcde";

findTheDifference(s, t)


