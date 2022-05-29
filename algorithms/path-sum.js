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

  if (!root.left && !root.right) {
    return targetSum - root.val === 0;
  }
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );

  // 自己开始想出来的 但是略显冗余 还使用了额外的空间

  // if (!root) return false;
  // const stack = [];
  // let flag = false;

  // const preOrder = (node) => {
  //   if (node) {
  //     stack.push(node.val);
  //     if (!node.left && !node.right) {
  //       const sum = stack.reduce((a, b) => a + b);
  //       if (sum === targetSum) {
  //         flag = true;
  //       }
  //     }
  //     if (!flag) {
  //       preOrder(node.left);
  //       preOrder(node.right);
  //     }
  //     stack.pop();
  //   }
  // };
  // preOrder(root);

  // return flag;
};
