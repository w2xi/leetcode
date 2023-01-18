/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 129. 求根节点到叶节点数字之和
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0;
  const dfs = (root, val = 0) => {
    if (root) {
      val = val * 10 + root.val;
      if (!root.left && !root.right) {
        sum += val;
      }
      dfs(root.left, val);
      dfs(root.right, val);
    }
  };
  dfs(root);

  return sum;
};
