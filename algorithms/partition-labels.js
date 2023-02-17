/**
 * 763. 划分字母区间
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const map = Array(26).fill(0);
  const result = [];
  let start = 0; // 片段的起始位置
  let end = 0; // 片段的结束位置

  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - 97;
    map[index] = i; // 记录字符最后出现的索引位置
  }
  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - 97;
    end = Math.max(end, map[index]);

    if (end === i) {
      // 说明后面的片段没有出现重复的字母了
      result.push(end - start + 1);
      start = end + 1; // 更新起始位置
    }
  }

  return result;
};
