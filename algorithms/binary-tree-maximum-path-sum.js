/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树中的最大路径和
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = Number.MIN_SAFE_INTEGER;
  const dfs = (node) => {
    if (!node) {
      return 0;
    }
    let leftSum = Math.max(0, dfs(node.left));
    let rightSum = Math.max(0, dfs(node.right));
    max = Math.max(max, leftSum + rightSum + node.val);
    console.log(leftSum, rightSum, node.val);

    return Math.max(leftSum, rightSum) + node.val;
  };
  dfs(root);

  return max;
};
