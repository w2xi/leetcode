/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  // 滑动窗口

  const map = new Map();
  let left = 0;
  let maxLen = Number.MIN_VALUE;

  for (let right = 0; right < fruits.length; right++) {
    const curr = fruits[right];
    map.set(curr, (map.get(curr) || 0) + 1);

    while (map.size > 2) {
      let currSize = map.get(fruits[left]);
      if (currSize === 1) {
        map.delete(fruits[left]);
      } else {
        map.set(fruits[left], currSize - 1);
      }
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};
