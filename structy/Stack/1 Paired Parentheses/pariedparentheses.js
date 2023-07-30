const pairedParentheses = (str) => {
  let count = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      count++;
    }
    if (str[i] === ")") {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  if (count > 0) {
    return false;
  }
  return true;
};

console.log(pairedParentheses(")(")); // -> true
