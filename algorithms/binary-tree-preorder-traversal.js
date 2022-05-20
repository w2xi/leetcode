/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树的前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const arr = [];
  const preOrderTravelsalNode = (node) => {
    if (node) {
      arr.push(node.val);
      preOrderTravelsalNode(node.left);
      preOrderTravelsalNode(node.right);
    }
  };
  preOrderTravelsalNode(root);

  return arr;
};
