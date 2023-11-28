var restoreString = function (s, indices) {
  let hash = {};
  s = s.split("");
  let i = 0;
  while (i < indices.length) {
    hash[indices[i]] = s[i];
    i++;
  }

  i = 0;
  console.log(hash);
  while (i < indices.length) {
    s[i] = Object.values(hash[i]);
    i++;
  }

  return s.join("");
};

let s = "codeleet";
let indices = [4, 5, 6, 7, 0, 2, 1, 3];

let done = restoreString(s, indices);
console.log(done);

//Another way:
//Space: O(n) = making new array
//Time: O (n) = going through array once.
var restoreString = function (s, indices) {
  let orderedString = new Array(s.length).fill(0);

  for (var i = 0; i <= s.length; i++) {
    orderedString[indices[i]] = s[i];
  }

  orderedString = orderedString.join("");

  return orderedString;
};
