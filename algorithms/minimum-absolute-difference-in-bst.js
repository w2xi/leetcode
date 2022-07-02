/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  // 中序遍历二叉搜索树等于遍历有序数组
  let min = Number.MAX_VALUE;
  let prev = null;
  const dfs = (node) => {
    if (node) {
      dfs(node.left);
      if (prev !== null) {
        min = Math.min(min, Math.abs(prev.val - node.val));
      }
      prev = node;
      dfs(node.right);
    }
  }
  dfs(root);
  return min;
};