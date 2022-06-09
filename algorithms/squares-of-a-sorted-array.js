/**
 * 有序数组的平方
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let i = 0,
    j = nums.length - 1;
  let result = Array(nums.length).fill(0);
  let count = nums.length - 1;

  while (i <= j) {
    const left = Math.abs(nums[i]);
    const right = Math.abs(nums[j]);

    if (right > left) {
      result[count--] = right * right;
      j--;
    } else {
      result[count--] = left * left;
      i++;
    }
  }

  return result;
};
