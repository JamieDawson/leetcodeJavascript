let test = () => {
  let hold = [];
  let one = [1, 1];
  let two = [2, 2];
  let three = [3, 3];

  hold.push(one);
  hold.push(two);
  hold.push(three);

  //console.log(hold);

  for (let [i, j] of hold) {
    console.log(i, j);
  }
};

test();
