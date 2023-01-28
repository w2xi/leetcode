/**
 * 1413. 逐步求和得到正数的最小值
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let sum = 0;
  let val = 1;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    val = Math.min(val, sum);
  }
  return val < 0 ? Math.abs(val) + 1 : val;
};
