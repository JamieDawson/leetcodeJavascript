let hashMapMaker = (value, hashmap) => {
  if (!hashmap[value]) {
    hashmap[value] = 1;
  } else {
    hashmap[value] += 1;
  }
};

var findCenter = function (edges) {
  let hashmap = {};
  for (let edge of edges) {
    hashMapMaker(edge[0], hashmap);
    hashMapMaker(edge[1], hashmap);
  }

  let returnKey = 0;

  for (number in hashmap) {
    if (hashmap[number] > returnKey) {
      returnKey = number;
    }
  }
  return returnKey;
};

let edges = [
  [1, 2],
  [2, 3],
  [4, 2],
];
findCenter(edges);

/*
SPACE: O(n) - hashmap stores all the edges and counts them.
TIME: O(n+m) - n is for edges and m is for hashmap.
*/

/*
var findCenter = function (edges) {
  let hashmap = {};
  for (let edge of edges) {
    if (!hashmap[edge[0]]) {
      hashmap[edge[0]] = 1;
    } else {
      hashmap[edge[0]] += 1;
    }
    if (!hashmap[edge[1]]) {
      hashmap[edge[1]] = 1;
    } else {
      hashmap[edge[1]] += 1;
    }
  }

  let returnKey = 0;

  for (number in hashmap) {
    if (hashmap[number] > returnKey) {
      returnKey = number;
    }
  }
  //  console.log(returnKey);
  return returnKey;
};
*/
