/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // 时间复杂度: O(nlogn)
  // 空间复杂度: O(1)

  if (nums.length <= 1) return nums.length;

  nums.sort((a, b) => a - b);
  let maxLength = 1;
  let count = 1;

  // 0 0 1 2 3 4 5 6 7 8

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      count++;
    } else if (nums[i] !== nums[i - 1]) {
      count = 1;
    }
    maxLength = Math.max(count, maxLength);
  }

  return maxLength;
};

// 时间复杂度: O(longn)
// 空间复杂度: O(n)
var longestConsecutive = function (nums) {
  // 题目要求时间复杂度为 O(n), 就用空间换时间
  // (一般在leetcode中，对时间复杂度有要求，就用空间来换，对空间复杂度有要求，就用时间来换)

  const set = new Set(nums);
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let val = nums[i];
      let curLen = 1;

      while (set.has(val + 1)) {
        val++;
        curLen++;
      }
      maxLength = Math.max(curLen, maxLength);
    }
  }

  return maxLength;
};
