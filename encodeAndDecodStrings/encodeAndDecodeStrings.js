class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let newStr = "";
    for (let s of strs) {
      newStr += s.length + "#" + s;
    }
    return newStr;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let newArr = [];
    let i = 0;

    while (i < str.length) {
      let j = i;

      while (str[j] !== "#") {
        j++;
      }

      let num = parseInt(str.substring(i, j));
      i = j + 1;

      let word = str.substring(i, i + num);
      newArr.push(word);
      i = i + num;
    }
    return newArr;
  }
}

let arr = ["neet", "code", "love", "you"];

let testing = new Solution();

let enc = testing.encode(arr);

let dec = testing.decode(enc);
console.log(dec);
