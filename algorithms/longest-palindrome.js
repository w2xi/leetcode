/**
 * 409. 最长回文串
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let count = 0;
  const map = Array(52).fill(0);

  for (let i = 0; i < s.length; i++) {
    // lower letter: 0 ~ 25
    // upper letter: 26 ~ 51
    let index;
    if (s[i] < "a") {
      // upper letter
      index = s[i].charCodeAt() - 65 + 26;
    } else {
      index = s[i].charCodeAt() - 97;
    }
    if (map[index]) {
      // 成双成对
      count += 2;
      map[index]--;
    } else {
      map[index]++;
    }
  }
  for (let i = 0; i < map.length; i++) {
    if (map[i] === 1) {
      count++;
      break;
    }
  }
  return count;
};
