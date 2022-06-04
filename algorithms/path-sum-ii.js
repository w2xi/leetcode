/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 路径总和 II
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const arr = [];
  const result = [];

  const dfs = (node, sum) => {
    if (node) {
      arr.push(node.val);
      if (!node.left && !node.right && node.val === sum) {
        result.push([...arr]);
      }
      dfs(node.left, sum - node.val);
      dfs(node.right, sum - node.val);
      arr.pop();
    }
  };
  
  dfs(root, targetSum);

  return result;
};
