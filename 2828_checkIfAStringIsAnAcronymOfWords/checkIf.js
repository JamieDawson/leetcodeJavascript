var isAcronym = function (words, s) {
  if (words.length !== s.length) return false;

  for (var i = 0; i < words.length; i++) {
    let sLetter = s[i];
    let wordLetter = words[i][0];

    if (sLetter !== wordLetter) return false;
  }

  return true;
};

let words = ["alice", "bob", "charlie"];
let s = "abc";

isAcronym(words, s);
