/*
 * @lc app=leetcode.cn id=2287 lang=javascript
 *
 * [2287] 重排字符形成目标字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
  // 思路: 分别统计 s target 中每个字符出现的次数，然后求最小倍数
  
  let result = Number.MAX_VALUE;
  const map1 = Array(26).fill(0);
  const map2 = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - 97;
    map1[index]++;
  }
  for (let i = 0; i < target.length; i++) {
    const index = target[i].charCodeAt() - 97;
    map2[index]++;
  }
  for (let i = 0; i < map1.length; i++) {
    const a = map1[i];
    const b = map2[i];
    const c = b ? Math.floor(a / b) : 0;

    if (!a && b) {
      return 0;
    }
    if (a && b) {
      result = Math.min(result, c);
    }
  }
  return result;
};
// @lc code=end

