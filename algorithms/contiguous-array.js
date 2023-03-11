/**
 * 525. 连续数组
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const map = new Map();
  map.set(0, -1);

  let maxLength = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 0 ? -1 : 1;

    if (map.has(sum)) {
      const leftIndex = map.get(sum);
      if (i - leftIndex > maxLength) {
        maxLength = i - leftIndex;
      }
    } else {
      map.set(sum, i);
    }
  }

  return maxLength;
};
