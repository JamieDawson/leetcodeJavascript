var truncateSentence = function (s, k) {
	s = s.split(' ');
	let num = s.length - k;

	while (num > 0) {
		s.pop();
		num--;
	}
	let result = s.join(' ');

	return result;
};

let s = 'Hello how are you Contestant';
let k = 4;

truncateSentence(s, k);

/*
    create array of all the words seperated by the empty space (' ')

    create loop that goes through all the words
        if number is bigger than k
            remove this word

*/
