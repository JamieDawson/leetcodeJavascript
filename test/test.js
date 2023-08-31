let runTest = (tasks) => {
  let hash = new Object();

  tasks.forEach((element) => {
    if (!hash[element]) {
      hash[element] = 1;
    } else {
      hash[element] += 1;
    }
  });

  console.log(hash);

  //get keys
  for (var i in hash) {
    console.log(i);
  }

  //get values
  for (var i in hash) {
    console.log(hash[i]);
  }
};

let tasks = ["aaa", "bbb", "bbb", "bbb", "ccc"];

runTest(tasks);
