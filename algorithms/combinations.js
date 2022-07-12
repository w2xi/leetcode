/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  const path = [];
  const backTracking = (n, k, startIndex) => {
    // 终止条件
    if (path.length === k) {
      result.push(path.slice());
      return;
    }
    for (let i = startIndex; i <= n; i++) { // 控制树的横向遍历
      path.push(i);                         // 处理节点
      backTracking(n, k, i + 1);            // 递归,控制树的纵向遍历,注意下一层搜索要从i+1开始
      path.pop();                           // 回溯,撤销处理的节点
    }
  };
  backTracking(n, k, 1);

  return result;
};
