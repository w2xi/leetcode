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
  // 1. 递归
  const result = [];
  const preOrderTravelsalNode = (node) => {
    if (node) {
      result.push(node.val);
      preOrderTravelsalNode(node.left);
      preOrderTravelsalNode(node.right);
    }
  };
  preOrderTravelsalNode(root);

  return result;

  // 2. 迭代
  // return preOrderTraversalIterate(root);
}

function preOrderTraversalIterate(root){
  const result = [];
  const stack = [];
  root && stack.push(root);

  while (stack.length > 0) {
    // 出栈
    const node = stack.pop();
    result.push(node.val);
    // 入栈
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return result;
};
