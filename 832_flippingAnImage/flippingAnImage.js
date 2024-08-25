const reverseImage = (image) => {
  let size = image.length;
  let count = 0;

  while (count < size) {
    let i = 0;
    let j = image[count].length - 1;
    while (i < j) {
      let temp = image[count][i];
      image[count][i] = image[count][j];
      image[count][j] = temp;
      i++;
      j--;
    }
    count++;
  }
  return image;
};

const invert = (image) => {
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      if (image[i][j] === 0) {
        image[i][j] = 1;
      } else {
        image[i][j] = 0;
      }
    }
  }
  return image;
};

const flipAndInvertImage = (image) => {
  let reversed = reverseImage(image);
  let inverted = invert(reversed);
  console.log(inverted);
  return inverted;
};

let image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

flipAndInvertImage(image);

/*
Time complexity: O(1) - not creating extra space that is the size of the input array.

*/
