var reverse = function (x) {
	const limit = 2147483648;
	const posOrNeg = x < 0 ? -1 : 1;
	const arr = Number(String(Math.abs(x)).split('').reverse().join(''));
	return arr > limit ? 0 : arr * posOrNeg;
};
