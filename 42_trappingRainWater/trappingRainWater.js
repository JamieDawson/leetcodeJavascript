const trap = (height) => {
  let leftMax = [];
  let rightMax = [];

  //fill up leftMax.
  for (var i = 0; i < height.length; i++) {
    let num = Math.max(height[(i - 1, i)]);
    leftMax.push(num);
  }
  console.log(leftMax);
};

let height = [4, 2, 0, 3, 2, 5];
trap(height);
