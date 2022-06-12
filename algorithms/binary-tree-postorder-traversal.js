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
  // 1. 递归
  const result = [];
  const postOrderTraversalNode = (node) => {
    if (node) {
      postOrderTraversalNode(node.left);
      postOrderTraversalNode(node.right);
      result.push(node.val);
    }
  };
  postOrderTraversalNode(root);

  return result;

  // 2. 迭代
  // return postOrderTraversalIterate(root);
};

function postOrderTraversalIterate(root) {
  const result = [];
  const stack = [];
  root && stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);

    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return result.reverse();
}
