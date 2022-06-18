/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 数组哈希计数
  const countArr = Array(26).fill(0);

  if (s.length !== t.length) {
    return false;
  }

  for (let char of s) {
    const index = char.charCodeAt() - "a".charCodeAt();
    countArr[index]++;
  }

  for (let char of t) {
    const index = char.charCodeAt() - "a".charCodeAt();
    countArr[index]--;
    if (countArr[index] < 0) {
      return false;
    }
  }

  return true;
};
