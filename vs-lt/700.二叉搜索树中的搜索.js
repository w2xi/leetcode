/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (!root) return null;
  if (val < root.val) {
    return searchBST(root.left, val);
  } else if (val > root.val) {
    return searchBST(root.right, val);
  } else {
    return root;
  }

  // 迭代
  // return helper(root, val);
};

function helper(root, val) {
  while (root) {
    if (val < root.val) {
      root = root.left;
    } else if (val > root.val) {
      root = root.right;
    } else {
      return root;
    }
  }
  return null;
}
// @lc code=end

