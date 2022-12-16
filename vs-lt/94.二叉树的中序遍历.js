/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const result = [];
  const inOrder = (node) => {
    if (node) {
      inOrder(node.left);
      result.push(node.val);
      inOrder(node.right);
    }
  }
  // inOrder(root);

  // return result;

  return inOrderIterate(root);
};

// 中序遍历
// 左中右
function inOrderIterate(root) {
  const result = [];
  const stack = [];
  let curr = root;

  while (stack.length || curr) {
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
// @lc code=end

