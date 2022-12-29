/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (!root) return root;
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root;
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  } else { // 找到了要删除的节点
    // (1). 叶节点
    if (!root.left && !root.right) {
      return null;
    }
    // (2). 只有一个孩子节点
    if (!root.left) {
      return root.right;
    }
    if (!root.right) {
      return root.left;
    }
    // (3). 左右孩子节点都存在
    // 获取右子树最小值节点
    const minNode = getMinNode(root.right);
    // 用最小值节点的值替换当前待删除几点的值
    root.val = minNode.val;
    // 删除最小值节点
    root.right = deleteNode(root.right, minNode.val);
    
    return root;
  }
};

function getMinNode(root) {
  while (root.left) {
    root = root.left;
  }
  return root;
}
// @lc code=end

