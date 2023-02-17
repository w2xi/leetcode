/**
 * 435. 无重叠区间
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 1) return 0;
  let result = 0;
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      intervals[i][1] = Math.min(intervals[i - 1][1], intervals[i][1]);
      result++;
    }
  }

  return result;
};
