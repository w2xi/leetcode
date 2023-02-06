/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 2331. 计算布尔二叉树的值
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function(root) {
  if (!root) return false;
  if (root.val < 2) {
      return !!root.val;
  }
  const left = evaluateTree(root.left);
  const right = evaluateTree(root.right);
  if (root.val === 2) {
      return left || right;
  }
  return left && right;
};