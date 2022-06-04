/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 最长同值路径
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  let maxCount = 0;
  const dfs = (node, parent) => {
    if (!node) {
      return 0;
    }
    const left = dfs(node.left, node);
    const right = dfs(node.right, node);

    maxCount = Math.max(maxCount, left + right);

    if (parent && node.val === parent.val) {
      return Math.max(left, right) + 1;
    }
    return 0;
  };
  dfs(root);
  return maxCount;
};
