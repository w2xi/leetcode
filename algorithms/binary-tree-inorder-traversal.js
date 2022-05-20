/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树的中序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const arr = [];
  const inOrderTraverseNode = (node) => {
    if (node) {
      inOrderTraverseNode(node.left);
      arr.push(node.val);
      inOrderTraverseNode(node.right);
    }
  };

  inOrderTraverseNode(root);

  return arr;
};
