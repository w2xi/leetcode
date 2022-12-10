/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  // two poiners

  const arr = s.split('');

  for (let i = 0; i < arr.length; i += 2 * k) {
    let left = i;
    let right = i + k - 1;

    if (right > arr.length - 1) {
      right = arr.length - 1;
    }
    while (left < right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
    
  return arr.join('');
};

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
// @lc code=end

