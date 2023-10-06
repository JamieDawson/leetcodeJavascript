var maxProfit = function (prices) {
  let l = 0; //buy
  let r = 1; //sell
  let max = 0;

  while (r < prices.length) {
    if (prices[l] >= prices[r]) {
      l = r;
    }
    let buyAndSell = prices[r] - prices[l];
    max = Math.max(max, buyAndSell);
    r++;
  }
  return max;
};

let prices = [7, 1, 5, 3, 6, 4];

maxProfit(prices);

/*
let buyMinPrice = first item in array
let max = 0

for loop starting at 1
    sellprice var equal to i
    profit variable = sellPrice - buyMinPirce
    max = math.max (profit or max)
    buyMinPrice compared math.min to either prices[i] or buyMinPrice


return max
*/

/*
  let minBuyPrice = prices[0];
  let max = 0;

  for (var i = 1; i < prices.length; i++) {
    const sellPrice = prices[i];
    const profit = sellPrice - minBuyPrice;
    max = Math.max(max, profit);
    minBuyPrice = Math.min(minBuyPrice, prices[i]);
    ///////////////////
    // console.log("profit is: " + profit);
    // console.log("max is: " + max);
    // console.log("minBuyPrice is: " + minBuyPrice);
    // console.log("**************");
  }
  return max;

  */
