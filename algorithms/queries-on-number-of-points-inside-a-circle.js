/**
 * 1828. 统计一个圆中点的数目
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
  // 设 点到圆心的距离为 s, 圆的半径为 r
  // if s <= r, 说明点在圆心内

  const result = [];

  for (let i = 0; i < queries.length; i++) {
    const [x, y, r] = queries[i];
    let count = 0;
    for (let j = 0; j < points.length; j++) {
      const dx = x - points[j][0];
      const dy = y - points[j][1];
      if (dx * dx + dy * dy <= r * r) {
        count++;
      }
    }
    result.push(count);
  }

  return result;
};
