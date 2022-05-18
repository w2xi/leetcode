/**
 * 罗马数字转整数
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman2num = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (roman2num[s[i]] < roman2num[s[i + 1]]) {
      sum -= roman2num[s[i]];
    } else {
      sum += roman2num[s[i]];
    }
  }

  return sum;
};
