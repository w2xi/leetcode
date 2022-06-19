/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  // 对得分从高到低进行排序
  const top = score.slice().sort((a, b) => b - a);
  const result = [];
  const o = {};

  // 哈希表 保存 score[i] 的原始索引
  for (let i = 0; i < score.length; i++) {
    o[score[i]] = i;
  }
  for (let i = 0; i < top.length; i++) {
    // 原始索引
    const originalIndex = o[top[i]];
    // 排名
    let rank = i + 1;
    if (rank === 1) {
      answer = "Gold Medal";
    } else if (rank === 2) {
      answer = "Silver Medal";
    } else if (rank === 3) {
      answer = "Bronze Medal";
    } else {
      answer = rank.toString();
    }
    result[originalIndex] = answer;
  }

  return result;
};
