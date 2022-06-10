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
var countNodes = function (root) {
  // 1. 递归遍历 O(n)
  let count = 0;
  const preOrderTraverse = (node) => {
    if (node) {
      count++;
      preOrderTraverse(node.left);
      preOrderTraverse(node.right);
    }
  };
  preOrderTraverse(root);

  return count;
};
