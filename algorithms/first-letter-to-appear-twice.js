/**
 * 2351. 第一个出现两次的字母
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const map = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - 97;
    map[index]++;
    if (map[index] === 2) {
      return s[i];
    }
  }
};
