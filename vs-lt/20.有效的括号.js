/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }
  const o = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (!o[s[i]]) {
      stack.push(s[i]);
    } else if (o[s[i]] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};
// @lc code=end

