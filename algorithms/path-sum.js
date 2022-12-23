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
    return true
  }
  let left = hasPathSum(root.left, targetSum - root.val);
  let right = hasPathSum(root.right, targetSum - root.val);

  return left || right;

  // 迭代
  // return preOrder(root, targetSum);
};

function preOrder(root, targetSum) {
  const stack = [];
  root && stack.push({ node: root, sum: targetSum });

  while (stack.length) {
    const curr = stack.pop();
    const node = curr.node;

    if (!node.left && !node.right && curr.sum === node.val) {
      return true;
    }

    node.right && stack.push({ node: node.right, sum: curr.sum - node.val });
    node.left && stack.push({ node: node.left, sum: curr.sum - node.val });
  }

  return false;
}
