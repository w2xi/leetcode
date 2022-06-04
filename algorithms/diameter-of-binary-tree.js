/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树的直径
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let maxNodeLen = 0;
  const maxPath = (node) => {
    if (!node.left && !node.right) {
      return 0;
    }
    const left = node.left ? maxPath(node.left) + 1 : 0;
    const right = node.right ? maxPath(node.right) + 1 : 0;
    maxNodeLen = Math.max(maxNodeLen, left + right);

    return Math.max(left, right);
  };
  root && maxPath(root);
  return maxNodeLen;
};
