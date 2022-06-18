/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  // 字符计数
  const map = new Map();

  for (let char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  // 按照出现次数的高低排序
  let result = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  let str = "";

  for (let [char, count] of result) {
    str += char.repeat(count);
  }

  return str;
};
