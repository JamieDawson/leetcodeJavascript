var flipAndInvertImage = function (image) {
  for (let row of image) {
    for (let value of row) {
      if (row[value] === 0) {
        row[value] = 1;
      } else {
        row[value] = 0;
      }
    }
  }
  return image;
};

// var changeValue = (value) => {
//   console.log(value);
//   if (value === 0) {
//     value = 1;
//   } else {
//     value = 0;
//   }

//   return value;
// };

let image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

console.log(flipAndInvertImage(image));
