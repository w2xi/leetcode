/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 路径总和
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // DFS (简洁清晰)
  if (!root) return false;
  // leaf node
  if (!root.left && !root.right && targetSum === root.val) {
    return true;
  }
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );

  // 自己开始想出来的 但是略显冗余 还使用了额外的空间
  // return hasPathSum2(root, targetSum);
};

function hasPathSum2(root, targetSum) {
  if (!root) return false;
  const stack = [];
  let flag = false;
  const preOrder = (node) => {
    if (node) {
      stack.push(node.val);
      // leaf node
      if (!node.left && !node.right && targetSum === sum(stack)) {
        flag = true;
      }
      if (!flag) { // 剪枝
        preOrder(node.left);
        preOrder(node.right);
      }
      stack.pop(); // 回溯
    }
  };
  preOrder(root);
  return flag;
}
function sum(arr) {
  return arr.reduce((a, b) => a + b);
}
