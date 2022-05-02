// 方法一：双指针

/**
 * 反转字符串
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  const len = s.length;
  let start = 0, end = len - 1;

  while (start < end) {
      [s[start], s[end]] = [s[end], s[start]];
      start++; 
      end--;
  }
};