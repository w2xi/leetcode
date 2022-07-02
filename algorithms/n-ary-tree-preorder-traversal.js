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

  // BFS
  // return bfs(root);
};

// BFS
function bfs(root) {
  const result = [];
  const stack = [];
  stack.push(root);

  if (!root) return [];

  while (stack.length) {
    const node = stack.pop();
    const children = node.children;
    result.push(node.val);
    for (let i = children.length - 1; i >= 0; i--) {
      stack.push(children[i]);
    }
  }

  return result;
}
