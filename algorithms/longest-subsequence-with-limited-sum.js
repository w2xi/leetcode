/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  // 排序 + 前缀和 + 二分

  nums.sort((a, b) => a - b);
  const ans = Array(queries.length);

  for (let i = 1; i < nums.length; i++) nums[i] += nums[i - 1];

  for (let i = 0; i < queries.length; i++) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
      const mid = (low + high) >> 1;
      if (queries[i] < nums[mid]) {
        high = mid - 1;
      } else if (queries[i] >= nums[mid]) {
        low = mid + 1;
      }
    }
    ans[i] = high + 1;
  }

  return ans;
};