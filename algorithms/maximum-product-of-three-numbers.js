/**
 * 三个数的最大乘积
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  if (nums.length === 3) {
    return nums.reduce((a, b) => a * b);
  }
  nums.sort((a, b) => a - b);

  // [-3, -2, -1, 1, 2, 3, 4]

  const backThree = multiply(nums.slice(-3));
  const mixedThree = multiply([...nums.slice(0, 2), ...nums.slice(-1)]);

  return Math.max(backThree, mixedThree);
};

function multiply(arr) {
  return arr.reduce((a, b) => a * b);
}
