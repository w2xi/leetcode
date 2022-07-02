/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  // DFS
  const result = [];
  const dfs = (node) => {
    if (node) {
      const children = node.children;
      children.forEach((child) => {
        dfs(child);
      });
      result.push(node.val);
    }
  };

  dfs(root);

  return result;

  // BFS
  // return bfs(root);
};

// 后序遍历 左右中
// 先序遍历(中左右) -> 中右左(调整代码顺序) -> 左右中(反转结果)

function bfs(root) {
  if (!root) return [];
  const result = [];
  const stack = [];
  stack.push(root);

  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    const children = node.children;
    children.forEach((child) => {
      stack.push(child);
    });
  }

  return result.reverse();
}
