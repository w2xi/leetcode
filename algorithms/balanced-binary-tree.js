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

/*
 *       1 
 *      / \
 *     2   2
 *    / \ 
 *   3   3
 *  / \ 
 *  4  4
 * 
 * 从基准情形开始分析，即最左边节点(值为4)开始，类似后序遍历，
 * 计算根节点的左右子树的高度差，如果不符合条件，则返回-1,即该树不是平衡二叉树。
 */