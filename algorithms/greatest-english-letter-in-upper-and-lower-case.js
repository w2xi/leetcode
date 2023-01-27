/**
 * 2309. 兼具大小写的最好英文字母
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  const lowerMap = Array(26).fill(0);
  const upperMap = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    let index;
    if (s[i] >= "a" && s[i] <= "z") {
      index = s[i].charCodeAt() - 97;
      lowerMap[index]++;
    } else {
      index = s[i].charCodeAt() - 65;
      upperMap[index]++;
    }
  }
  for (let i = upperMap.length - 1; i >= 0; i--) {
    if (lowerMap[i] && upperMap[i]) {
      return String.fromCharCode(i + 65);
    }
  }

  return "";
};
