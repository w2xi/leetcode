/**
 * 6315. 统计范围内的元音字符串数
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  const set = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;

  for (let i = left; i <= right; i++) {
    const cur = words[i];
    if (set.has(cur[0]) && set.has(cur[cur.length - 1])) {
      count++;
    }
  }
  return count;
};
