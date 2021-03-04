var removeDuplicates = function (S) {
	var i = 0;
	var j = i + 1;
	var found = 1;

	var arr = S.split('');

	while (found == 1) {
		i = 0;
		j = i + 1;
		while (j < arr.length) {
			if (arr[i] === arr[j]) {
				console.log(arr[i]);
				console.log(arr[j]);
				console.log(arr);
				arr.splice(j, 1);
				arr.splice(i, 1);
				found = 1;
				break;
				//console.log(arr);
			}
			i++;
			j++;
			found = 0;
		}
	}
	console.log(arr);
};

var S = 'abbaca';
removeDuplicates(S);

/*
Convert string to an array.
i = 0;
j = i + 1;
found = 1
convert string to split('') array

loop while found is 1
found = 0;
Loop through array.
    if values in i and j are same
        filter i
        filter j
        set loop to 1.


Convert existing array to string.
return string.
*/
