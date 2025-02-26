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
