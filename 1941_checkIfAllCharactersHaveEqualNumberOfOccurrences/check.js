var areOccurrencesEqual = function (s) {
	let hash = {};

	for (let char of s) {
		if (hash[char]) hash[char]++;
		else hash[char] = 1;
	}
	//console.log(hash);
	//.log(Object.values(hash)[0]);
	//console.log(Object.values(hash).length);

	let check = Object.values(hash)[0];
	console.log(check);
	for (var i = 0; i < Object.values(hash).length; i++) {
		if (check != Object.values(hash)[i]) {
			return false;
		}
	}
	return true;
};

let s = 'abacbc';
areOccurrencesEqual(s);

/*
Create hash to store values.

loop through has to see if all values are the same number.
    if they aren't 
        return false
return true

*/

/*
Time complexity:  O(n): The worst case is it loops through the list once.
Space complexity: O(n): The worst case is that every character is unique.
*/
