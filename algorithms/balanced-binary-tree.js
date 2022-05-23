/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 平衡二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  function helper(node) {
    if (!node) return 0;
    const leftHeight = helper(node.left);
    const rightHeight = helper(node.right);
    const abs = Math.abs(leftHeight - rightHeight);

    if (leftHeight >= 0 && rightHeight >= 0 && abs <= 1) {
      return Math.max(leftHeight, rightHeight) + 1;
    } else {
      -1;
    }
  }

  return helper(root) >= 0;
};
