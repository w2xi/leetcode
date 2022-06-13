/**
 * 第三大的数
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  // 维护前三大的值
  let firstVal, secondVal, thirdVal;
  firstVal = secondVal = thirdVal = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstVal) {
      thirdVal = secondVal;
      secondVal = firstVal;
      firstVal = nums[i];
    } else if (nums[i] < firstVal && nums[i] > secondVal) {
      thirdVal = secondVal;
      secondVal = nums[i];
    } else if (nums[i] < secondVal && nums[i] > thirdVal) {
      thirdVal = nums[i];
    }
  }

  return thirdVal === Number.MIN_SAFE_INTEGER ? firstVal : thirdVal;
};
