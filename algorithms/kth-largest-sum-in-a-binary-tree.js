/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 6308. 二叉树中的第 K 大层和
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
  // BFS
  let depth = 0;
  const queue = [root];
  let result = [];

  while (queue.length) {
    let size = queue.length;
    let sum = 0;
    while (size--) {
      const node = queue.shift();
      sum += node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(sum);
    depth++;
  }
  if (k > depth) return -1;
  result.sort((a, b) => b - a);

  return result[k - 1] ? result[k - 1] : -1;
};