/**
 * 406. 根据身高重建队列
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  // 按照身高从高到低排序, 身高相等的根据第二位的大小从小到大排序
  people.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return b[0] - a[0];
  });

  const result = [];
  for (let i = 0; i < people.length; i++) {
    // 依次插队
    result.splice(people[i][1], 0, people[i]);
  }

  return result;
};
