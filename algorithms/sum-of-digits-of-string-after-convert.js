/**
 * 1945. 字符串转化后的各位数字之和
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var getLucky = function(s, k) {
  let result = 0;
  let sum = '';

  for (let i = 0; i < s.length; i++) {
    sum += s[i].charCodeAt() - 97 + 1;
  }
  while (k--) {
    result = 0;
    for (let i = 0; i < sum.length; i++) {
      result += Number(sum[i]);
    }
    sum = result.toString();
  }

  return result;
};