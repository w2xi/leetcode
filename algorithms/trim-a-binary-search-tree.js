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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  // 后序遍历
  if (!root) return null;
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  if (root.val < low || root.val > high) {
    // 叶节点
    if (!root.left && !root.right) {
      return null;
    }
    // 左节点不存在
    if (!root.left) {
      return root.right;
    }
    // 右节点不存在
    if (!root.right) {
      return root.left;
    }
  }
  return root;
};