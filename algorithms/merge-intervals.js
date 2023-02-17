/**
 * 56. 合并区间
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 1) {
    return intervals;
  }
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= intervals[i - 1][1]) {
      // 重叠
      intervals[i][1] = Math.max(intervals[i][1], intervals[i - 1][1]);
      intervals[i][0] = intervals[i - 1][0];
    } else {
      result.push(intervals[i - 1]);
    }
  }

  result.push(intervals[intervals.length - 1]); // 总是 push 最后一个元素

  return result;
};
