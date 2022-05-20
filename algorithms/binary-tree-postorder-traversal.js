/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树的后序遍历 (先访问节点的后代节点，再访问节点本身)
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const arr = [];
  const postOrderTraversalNode = (node) => {
    if (node) {
      postOrderTraversalNode(node.left);
      postOrderTraversalNode(node.right);
      arr.push(node.val);
    }
  };
  postOrderTraversalNode(root);

  return arr;
};
