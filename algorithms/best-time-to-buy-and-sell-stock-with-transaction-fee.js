/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let minPrice = prices[0];
  let result = 0;

  for (let i = 1; i < prices.length; i++) {
    const curr = prices[i];
    if (minPrice > curr) {
      minPrice = curr;
    }
    if (curr - minPrice > fee) {
      result += curr - minPrice - fee;
      minPrice = curr - fee;
    }
  }

  return result;
};
