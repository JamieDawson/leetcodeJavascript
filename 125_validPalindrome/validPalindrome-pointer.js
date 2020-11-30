var isPalindrome = function (s) {
	const san = s.replace(/[^\w]/gi, '').toLowerCase();
	let left = 0;
	let right = san.length - 1;
	while (left < right) {
		if (san[left] != san[right]) return false;
		left++;
		right--;
	}
	return true;
};
