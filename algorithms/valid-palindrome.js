/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = "";
  // 过滤非数字和字母字符
  for (let c of s) {
    // 忽略空格
    if (c === " ") continue;
    if (
      (c >= "a" && c <= "z") ||
      (c >= "A" && c <= "Z") ||
      (c >= 0 && c <= 9)
    ) {
      str += c.toLowerCase();
    }
  }
  // 双指针
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
};
