var reformat = function (s) {
  if (s.length <= 1) return s;

  const result = [];
  const letters = s.match(/[a-zA-Z]/g) || [];
  const nums = s.match(/[0-9]/g) || [];

  if (!letters.length || !nums.length) return '';

  const larger = letters.length > nums.length ? 'letters' : 'nums';

  while (letters.length || nums.length) {
    let letter = letters.pop();
    let num = nums.pop();
    larger === 'letters' ? result.push(letter, num) : result.push(num, letter);
  }

  return result.join('');
};
