const find_index = (list) => {
  let tracker = -1;

  for (let val of list) {
    tracker++;
    const obj = JSON.parse(val);

    for (var i = 0; i < obj.words.length; i++) {
      let end = obj.words[i].end;
      let start;

      if (i + 1 < obj.words.length) {
        start = obj.words[i + 1].start;
      } else {
        start = 0;
      }

      if (start - end >= 2.0) {
        console.log("found tracker! " + tracker);
        return tracker;
      }
    }
  }
};

// Example usage:
//Does NOT work:
let message = [
  '{ "is_final": true, "start": 0.0, "end": 2.5,' +
    '"words": [' +
    '{ "word": "a", "start": 0.0, "end": 0.5 },' +
    '{ "word": "b", "start": 0.5, "end": 1.0 },' +
    '{ "word": "c", "start": 1.0, "end": 1.5 }' +
    "]" +
    "}",
  '{ "is_final": true, "start": 2.5, "end": 3.5,' + '"words": []' + "}",
];

// Example usage:
//Works if there's a clear silence!
// let message = [
//   '{ "is_final": true, "start": 0.0, "end": 2.5,' +
//     '"words": [' +
//     '{ "word": "a", "start": 0.0, "end": 0.5 },' +
//     '{ "word": "b", "start": 0.5, "end": 1.0 },' +
//     '{ "word": "c", "start": 1.0, "end": 1.5 }' +
//     "]" +
//     "}",
//   '{ "is_final": true, "start": 1.5, "end": 5.5,' +
//     '"words": [' +
//     '{ "word": "a", "start": 1.5, "end": 2.0 },' +
//     '{ "word": "b", "start": 2.5, "end": 2.2 },' +
//     '{ "word": "c", "start": 5.2, "end": 5.5 }' +
//     "]" +
//     "}",
// ];

find_index(message);

//Works with basic case. Improve code above.
/*
const find_index = (list) => {
  let tracker = -1;

  for (let val of list) {
    tracker++;
    const obj = JSON.parse(val);

    for (var i = 0; i < obj.words.length; i++) {
      let end = obj.words[i].end;
      let start;

      if (i + 1 < obj.words.length) {
        start = obj.words[i + 1].start;
      } else {
        start = 0;
      }

      if (start - end >= 2.0) {
        console.log("found tracker! " + tracker);
        return tracker;
      }
    }
  }
};

// Example usage:
//Works if there's a clear silence!
let message = [
  '{ "is_final": true, "start": 0.0, "end": 2.5,' +
    '"words": [' +
    '{ "word": "a", "start": 0.0, "end": 0.5 },' +
    '{ "word": "b", "start": 0.5, "end": 1.0 },' +
    '{ "word": "c", "start": 1.0, "end": 1.5 }' +
    "]" +
    "}",
  '{ "is_final": true, "start": 1.5, "end": 5.5,' +
    '"words": [' +
    '{ "word": "a", "start": 1.5, "end": 2.0 },' +
    '{ "word": "b", "start": 2.5, "end": 2.2 },' +
    '{ "word": "c", "start": 5.2, "end": 5.5 }' +
    "]" +
    "}",
];

find_index(message);
*/
