/**
 * 有序数组的平方
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let result = Array(nums.length).fill(0);
  let i = 0;
  let j = nums.length - 1;
  // 标记 result 数组需要填充的索引值 ( 从后往前 )
  let count = j;

  while (i <= j) {
    const left = Math.abs(nums[i]);
    const right = Math.abs(nums[j]);
    // 比较绝对值大小
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
