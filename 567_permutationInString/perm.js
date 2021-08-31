var checkInclusion = function (s1, s2) {
	s1 = s1.split('').sort().join('');
	s2 = s2.split('').sort().join('');

	console.log(s1);
	console.log(s2);
};

let s1 = 'ab';
let s2 = 'eidbaooo';

checkInclusion(s1, s2);

/*
sort s1 and s2 from smallest to largest.

Try and find the first letter from s1 in s2.
If you can get to the end of s1 by comparing to s2,
    return true
else
return false

*/
