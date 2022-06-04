/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树的所有路径
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const paths = [];
  const dfs = (node, path = "") => {
    if (node) {
      path += node.val;
      // leaf node
      if (!node.left && !node.right) {
        paths.push(path);
      } else {
        path += "->";
        dfs(node.left, path);
        dfs(node.right, path);
      }
    }
  };
  dfs(root);
  return paths;
};
