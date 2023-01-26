/**
 * 2042. 检查句子中的数字是否递增
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let prev = -1;
  let str = "";

  for (let i = 0; i < s.length; i++) {
    const val = s[i].charCodeAt();
    if (val >= 48 && val <= 57) {
      str += s[i];
    } else if (s[i] === " " && str) {
      if (str <= prev) {
        return false;
      }
      prev = +str;
      str = "";
    }
    if (i === s.length - 1 && str) {
      // 处理句子末尾的数字
      if (str <= prev) {
        return false;
      }
    }
  }

  return true;
};
