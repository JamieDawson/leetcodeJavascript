// var floodFill = function (image, sr, sc, color) {
//   if (image[sr][sc] == color) return image;
//   fill(image, sr, sc, color, image[sr][sc]);
//   return image;
// };

// var fill = function (image, sr, sc, color, cur) {
//   if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return;

//   if (cur != image[sr][sc]) return;

//   image[sr][sc] = color;
//   fill(image, sr - 1, sc, color, cur);
//   fill(image, sr + 1, sc, color, cur);
//   fill(image, sr, sc - 1, color, cur);
//   fill(image, sr, sc + 1, color, cur);
// };

var floodFill = function (image, sr, sc, color) {
  const newColor = image[sr][sc];
  if (newColor === color) return image;
  const queue = [[sr, sc]];

  while (queue.length) {
    const [row, col] = queue.shift();
    if (image[row][col] === newColor) {
      image[row][col] = newColor;
      if (row - 1 >= 0) queue.push([row - 1, col]);
      if (row + 1 < image.length) queue.push([row + 1, col]);
      if (col + 1 < image[0].length) queue.push([row, col + 1]);
      if (col - 1 >= 0) queue.push([row, col - 1]);
    }
  }

  return image;
};

let image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
let sr = 1;
let sc = 1;
let color = 2;

console.log(floodFill(image, sr, sc, color));

// Time Complexity : O(n*m)
// Space Complexity : O(n*m)

/*
var floodFill = function(image, sr, sc, color) {
    // Avoid infinite loop if the new and old colors are the same...
    if(image[sr][sc] == color) return image;
    // Run the fill function starting at the position given...
    fill(image, sr, sc, color, image[sr][sc]);
    return image;
}
var fill = function(image, sr, sc, color, cur) {
    // If sr is less than 0 or greater equals to the length of image...
    // Or, If sc is less than 0 or greater equals to the length of image[0]...
    if(sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return;
    // If image[sr][sc] is not equal to previous color...
    if(cur != image[sr][sc]) return;
    // Update the image[sr][sc] as a color...
    image[sr][sc] = color;
    // Make four recursive calls to the function with (sr-1, sc), (sr+1, sc), (sr, sc-1) and (sr, sc+1)...
    fill(image, sr-1, sc, color, cur);
    fill(image, sr+1, sc, color, cur);
    fill(image, sr, sc-1, color, cur);
    fill(image, sr, sc+1, color, cur);
};
*/



