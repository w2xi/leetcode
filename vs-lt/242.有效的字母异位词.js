/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sMap = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - 97;
    sMap[index]++;
  }
  for (let i = 0; i < t.length; i++) {
    const index = t[i].charCodeAt() - 97;
    sMap[index]--;
    if (sMap[index] < 0) {
      return false;
    }
  }
  return true;
};
// @lc code=end

