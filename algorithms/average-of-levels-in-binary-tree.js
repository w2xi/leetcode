/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树的层平均值
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  // 1. DFS
  let result = [];
  const dfs = (node, level = 0) => {
    if (node) {
      if (!result[level]) result[level] = [];
      result[level].push(node.val);
      dfs(node.left, level + 1);
      dfs(node.right, level + 1);
    }
  };
  dfs(root);

  result = result.map((item) => {
    const sum = item.reduce((a, b) => a + b);
    return Number((sum / item.length).toFixed(5));
  });

  return result;

  // 2. BFS
  // return bfs(root);
};

function bfs(root) {
  const result = [];
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const len = queue.length;
    let size = len;
    let sum = 0;

    while (size--) {
      const node = queue.shift();
      sum += node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    result.push(Number((sum / len).toFixed(5)));
  }

  return result;
}
