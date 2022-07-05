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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  // 1. 中序遍历 递归
  let sum = 0;
  const dfs = (node) => {
    if (node) {
      dfs(node.right);
      sum += node.val;
      node.val = sum;
      dfs(node.left);
    }
  };
  dfs(root);

  return root;

  // 2. 中序遍历 迭代
  // return inOrder(root);
};

// 中序遍历 迭代
function inOrder(root) {
  const stack = [];
  let curr = root;
  let sum = 0;
  while (stack.length || curr) {
    while (curr) {
      stack.push(curr);
      curr = curr.right;
    }
    const node = stack.pop();
    sum += node.val;
    node.val = sum;
    if (node.left) {
      curr = node.left;
    }
  }

  return root;
}
