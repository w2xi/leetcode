/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树的最大深度
 * 参考: https://www.bilibili.com/video/BV1Kb41127fT?p=40 (【浙江大学】数据结构)
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // 1. 递归
  if (!root) return 0;

  const leftHeihgt = maxDepth(root.left);
  const rightHeight = maxDepth(root.right);
  const maxHeight = Math.max(leftHeihgt, rightHeight);

  return maxHeight + 1;

  // 2. BFS
  // return levelOrder(root);
};

// 层序遍历获取最大深度
function levelOrder(root) {
  if (!root) return 0;
  let depth = 0;
  const queue = [];
  queue.push(root);

  while (queue.length) {
    let size = queue.length;
    depth++;
    while (size--) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return depth;
}
