/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 从叶结点开始的最小字符串
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  const str = "abcdefghijklmnopqrstuvwxyz";
  let minPath = "";
  const dfs = (node, path = "") => {
    if (node) {
      path = str[node.val] + path;
      // leaf node
      if (!node.left && !node.right) {
        if (!minPath || minPath > path) {
          minPath = path;
        }
      }
      dfs(node.left, path);
      dfs(node.right, path);
    }
  };
  dfs(root);
  return minPath;
};
