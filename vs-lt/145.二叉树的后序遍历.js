/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

import { node } from "webpack";

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
var postorderTraversal = function(root) {
  // 递归
  const result = [];
  const postOrder = (node) => {
    if (node) {
      postOrder(node.left);
      postOrder(node.right);
      result.push(node.val);
    }
  }
  postOrder(root);

  return result;

  // return postOrderIterate(root);
};

// 迭代
// 中右左
// => reverse
// 左右中

function postOrderIterate(root) {
  if (!root) return [];
  const result = [];
  const stack = [root];

  while (stack.length) {
    node = stack.pop();
    result.push(node.val);

    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }

  return result.reverse();
}
// @lc code=end

