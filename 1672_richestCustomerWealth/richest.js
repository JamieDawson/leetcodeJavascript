// var maximumWealth = function (accounts) {
// 	let i = 0;
// 	let big = 0;
// 	let check;
// 	while (accounts[i]) {
// 		check = 0;
// 		for (var j = 0; j < accounts[i].length; j++) {
// 			check = check + accounts[i][j];
// 		}
// 		console.log(check);
// 		if (check > big) {
// 			big = check;
// 		}
// 		i++;
// 	}
// 	return big;
// };

var maximumWealth = function (accounts) {
  let mostMoney = 0;
  let count;
  for (let customer of accounts) {
    count = 0;
    for (let value of customer) {
      count += value;
      if (count > mostMoney) mostMoney = count;
    }
  }
  return mostMoney;
};

let accounts = [
  [1, 2, 3],
  [3, 2, 1],
];
console.log(maximumWealth(accounts));
