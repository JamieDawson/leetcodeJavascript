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

//Other way of writting it:
/*
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let mySet = new Set();
    let left = 0;

    for(var right = 0; right < s.length; right++) {
        while(mySet.has(s[right])) {
            mySet.delete(s[left])
            left++;
        }

        mySet.add(s[right]);

        if(mySet.size > max) {
            max = mySet.size;
        }
    }

    return max;
};
*/
