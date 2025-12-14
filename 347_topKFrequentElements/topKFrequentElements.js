//MY SOLUTION:
/*
TIME: O(n + m)  n is biggestValues arry which is based off nums and m Map().
SPACE: O(n + m) n is biggestValues arry which is based off nums (a worst case example: [1,2]) and m is the Map()

*/
// var topKFrequent = function (nums, k) {
//   let myMap = new Map();
//   let biggestValues = [];

//   for (let val of nums) {
//     if (!myMap.has(val)) {
//       myMap.set(val, 1);
//     } else {
//       let grab = myMap.get(val);
//       myMap.set(val, grab + 1);
//     }
//   }
//   const mapSort1 = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));

//   let i = 0;
//   while (i < k) {
//     let mapInOrder = [...mapSort1][i];
//     let keyGrabbed = mapInOrder[0];
//     biggestValues.push(keyGrabbed);
//     i++;
//   }
//   return biggestValues;
// };

// var topKFrequent = function (nums, k) {
//   const mp = new Map();
//   const arr = new Array(nums.length + 1).fill(0);
//   const ans = [];

//   nums.forEach((el) => {
//     const val = mp.get(el) || 0;
//     mp.set(el, val + 1);
//   });

//   for (let [key, value] of mp) {
//     const prev = arr[value] || [];
//     prev.push(key);
//     arr[value] = prev;
//   }

//   arr.reverse();
//   for (let el of arr) {
//     if (k < 1) break;
//     if (el) {
//       for (let el2 of el) {
//         ans.push(el2);
//         k--;
//       }
//     }
//   }

//   return ans;
// };

var topKFrequent = function (nums, k) {
  const seen = {};
  const bucket = [];
  let res = [];

  for (let num of nums) {
    if (seen[num] === undefined) {
      seen[num] = 1;
    } else {
      seen[num]++;
    }
  }

  for (let i = 0; i <= nums.length; i++) {
    bucket.push([]);
  }

  for (let key in seen) {
    let count = seen[key];
    bucket[count].push(key);
  }

  console.log(bucket);

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length === 0) {
      continue;
    } else {
      res = [...res, ...bucket[i]];
    }
  }

  return res.slice(0, k);
};

let nums = [1, 1, 1, 2, 2, 3];
let k = 2;

topKFrequent(nums, k);

/*

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/
