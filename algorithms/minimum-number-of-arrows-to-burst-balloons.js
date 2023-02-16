/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0]);

  let result = 1; // points 为空至少需要一只箭

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= points[i - 1][1]) {
      // 更新重叠气球最小右边界
      points[i][1] = Math.min(points[i][1], points[i - 1][1]);
    } else {
      result++;
    }
  }

  return result;
};
