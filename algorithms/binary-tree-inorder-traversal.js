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
  // 1. 递归
  const result = [];
  const inOrderTraverseNode = (node) => {
    if (node) {
      inOrderTraverseNode(node.left);
      result.push(node.val);
      inOrderTraverseNode(node.right);
    }
  };

  inOrderTraverseNode(root);

  return result;

  // 2. 迭代
  // return inOrderTraversalIterate(root);
};

function inOrderTraversalIterate(root) {
  const result = [];
  const stack = [];
  let curr = root;

  while (stack.length > 0 || curr) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    const node = stack.pop();
    result.push(node.val);

    if (node.right) {
      curr = node.right;
    }
  }
  return result;
}
