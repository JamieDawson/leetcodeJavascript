const compress = (s) => {
  let i = 0;
  let j = 0;
  let result = [];

  while (j <= s.length) {
    if (s[j] === s[i]) {
      j++;
    } else {
      let number = j - i;
      if (number === 1) {
        result.push(s[i]);
      } else {
        result.push(number);
        result.push(s[i]);
        j += 1;
        i = j;
      }
    }
  }
  return result.join("");
};

compress("ccaaatsss"); // -> '2c3at3s'
