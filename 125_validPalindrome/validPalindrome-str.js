var isPalindrome = function (s) {
	const san = s.replace(/[^\w]/gi, '').toLowerCase();
	return san.split('').reverse().join('') == san;
	// 'aba' -> ['a','b','a'] -> 'abc'
};
