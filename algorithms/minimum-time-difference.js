/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  let min = Number.MAX_VALUE;
  const arr = [];
  // 转换为分钟
  for (let item of timePoints) {
    const [hour, minute] = item.split(":");
    arr.push(Number(hour) * 60 + Number(minute));
  }
  arr.sort((a, b) => a - b);

  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i] - arr[i - 1]);
  }
  // 首尾再比较一次
  min = Math.min(min, 24 * 60 - arr[arr.length - 1] + arr[0]);

  return min;
};
