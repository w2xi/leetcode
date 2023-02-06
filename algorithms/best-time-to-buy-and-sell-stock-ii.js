/**
 * 122. 买卖股票的最佳时机 II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let sum = 0;
  for (let i = 1; i < prices.length; i++) {
    currDiff = prices[i] - prices[i - 1];
    if (currDiff > 0) {
      sum += currDiff;
    }
  }
  return sum;
};
