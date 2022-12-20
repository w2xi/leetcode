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
  if (!root) {
    return true;
  }
  // 后序遍历
  const getHeight = (root) => {
    if (!root) {
      return 0;
    }
    const lh = getHeight(root.left);
    const rh = getHeight(root.right);

    if (lh === false || rh === false) return false;
    if (Math.abs(lh - rh) > 1) {
      // 返回 false 标记左右子树差大于1, 即不是平衡二叉树
      return false;
    }
    // 当前节点为根节点的树的最大高度
    return Math.max(lh, rh) + 1;
  };

  return getHeight(root);
};
