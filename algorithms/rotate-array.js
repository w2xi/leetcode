/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 空间复杂度O(1)
var rotate = function (nums, k) {
  k %= nums.length;

  const reverse = (nums, start, end) => {
    while (start < end) {
      [nums[start++], nums[end--]] = [nums[end], nums[start]];
    }
  };

  // 反转整个数组
  reverse(nums, 0, nums.length - 1);
  // 反转前k个元素
  reverse(nums, 0, k - 1);
  // 反转后k后面的元素
  reverse(nums, k, nums.length - 1);
};

// 空间复杂度O(n)
var rotate = function (nums, k) {
  const len = nums.length;
  const copy = [];

  for (let i = 0; i < len; i++) {
    copy.push(nums[i]);
  }

  for (let i = 0; i < len; i++) {
    const nextIndex = (i + k) % len;

    nums[nextIndex] = copy[i];
  }
};
