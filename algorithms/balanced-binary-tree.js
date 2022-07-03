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
 * @return {boolean}
 */
var isBalanced = function (root) {
  function helper(node) {
    if (!node) return 0;
    const leftHeight = helper(node.left);
    const rightHeight = helper(node.right);
    // 左子树 右子树 高度差的绝对值
    const abs = Math.abs(leftHeight - rightHeight);
    // 后序遍历(先访问左右子树，然后才访问父节点)
    if (leftHeight >= 0 && rightHeight >= 0 && abs <= 1) {
      // 根节点高度
      return Math.max(leftHeight, rightHeight) + 1;
    } else {
      // 表示不是平衡二叉树了
      return -1;
    }
  }

  return helper(root) >= 0;
};
