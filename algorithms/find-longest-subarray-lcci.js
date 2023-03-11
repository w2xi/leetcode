/**
 * 面试题 17.05.  字母与数字
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray = function (array) {
  // 前缀和 + 哈希表

  const map = new Map();
  map.set(0, -1);

  // letter: 1; number: -1
  let sum = 0;
  let maxLength = 0;
  let startIndex = 0;

  for (let i = 0; i < array.length; i++) {
    sum += Number.isInteger(+array[i][0]) ? -1 : 1;
    if (map.has(sum)) {
      const leftIndex = map.get(sum);
      if (i - leftIndex > maxLength) {
        maxLength = i - leftIndex;
        startIndex = leftIndex + 1;
      }
    } else {
      map.set(sum, i);
    }
  }
  if (maxLength === 0) return [];

  return array.slice(startIndex, startIndex + maxLength);
};
