/**
 * 6354. 找出数组的串联值
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  let result = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const curr = `${nums[left]}${nums[right]}`;
    result += Number(curr);
    left++;
    right--;
  }
  if (nums.length % 2 !== 0) {
    result += nums[left];
  }
  return result;
};
