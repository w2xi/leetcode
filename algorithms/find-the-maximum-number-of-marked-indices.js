/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function (nums) {
  // 自己写的第一版本 很暴力
  if (nums.length === 1) return 0;
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const used = Array(n).fill(0);

  const a = nums.slice(0, n >> 1);
  const b = nums.slice(n >> 1);

  let count = 0;
  for (let i = 0; i < a.length; i++) {
    let j = i;
    while (j < b.length) {
      if (2 * a[i] <= b[j] && !used[a.length + j]) {
        count += 2;
        used[a.length + j] = true;
        break;
      }
      j++;
    }
  }
  return count;
};

// 双指针
var maxNumOfMarkedIndices = function (nums) {
  const n = nums.length;
  let result = 0;
  nums.sort((a, b) => a - b);
  // [3,6,12]
  for (let i = 0, j = (n + 1) >> 1; j < n; j++) {
    if (2 * nums[i] <= nums[j]) {
      result += 2;
      i++;
    }
  }
  return result;
};
