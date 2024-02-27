var carFleet = function (target, position, speed) {
  let stack = Array(target + 1).fill(0);
  addOnesToStack(stack, position);
  checkPositionsWithSpeed(stack, position, speed);

  //  console.log(stack);
};

const addOnesToStack = (stack, position) => {
  for (var i = 0; i < position.length; i++) {
    stack[position[i]] = 1;
  }
};

const checkPositionsWithSpeed = (stack, position, speed) => {
  //loop through position array, use it's speed to move through stack
  //if value === 1, change to 0

  for (let i = 0; i < position.length; i++) {
    let j = 0;
    let ahead = position[i] + 1;

    while (j < speed[i]) {
      if (stack[ahead] == 1) {
        stack[ahead] = 0;
      }
      ahead++;
      j++;
    }
  }
};

let target = 12;
let position = [10, 8, 0, 5, 3];
let speed = [2, 4, 1, 1, 3];

carFleet(target, position, speed);
