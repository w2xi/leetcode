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
var insertIntoBST = function (root, val) {
  // 递归
  if (!root) {
    return new TreeNode(val);
  }
  if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  } else if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  }
  return root;

  // 迭代法
  // return helper(root, val);
};

// 迭代法
function helper(root, val) {
  if (!root) return new TreeNode(val);
  let curr = root;
  let parent = root;

  while (curr) {
    // 记录待插入节点的父节点
    parent = curr;
    if (val > curr.val) {
      curr = curr.right;
    } else {
      curr = curr.left;
    }
  }
  const node = new TreeNode(val);
  // 比较大小就可以知道插入左边还是右边
  if (val > parent.val) {
    parent.right = node;
  } else {
    parent.left = node;
  }
  return root;
}