// var reverseOnlyLetters = function(S) {
//     var begin = 0;
//     var end = S.length - 1;
//     var temp;

//     for (var i = 0; i < S.length; i++)
//     {
//         if ((S.charAt(begin).match(/[a-zA-Z]/)) && (S.charAt(end).match(/[a-zA-Z]/)))
//         {
//             temp = S[begin];
//             S[begin] = S[end];
//             S[end] = temp;
//             begin++;
//             end--;
//         }

   
//     }
 
//     console.log(S)
//     return (S);
// };

// reverseOnlyLetters("he.lo");