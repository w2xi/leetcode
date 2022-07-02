/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  // DFS
  const result = [];
  const dfs = (node) => {
    if (node) {
      result.push(node.val);
      const children = node.children;
      children.forEach((child) => {
        dfs(child);
      });
    }
  };

  dfs(root);

  return result;
};
