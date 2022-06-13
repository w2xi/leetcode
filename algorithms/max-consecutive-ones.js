/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0, currCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (1 === nums[i]) {
      currCount++;
      if (currCount > maxCount) {
        maxCount = currCount;
      }
    } else {
      currCount = 0;
    }
  }

  return maxCount;
};