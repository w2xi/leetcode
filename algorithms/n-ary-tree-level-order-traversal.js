/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * N 叉树的层序遍历
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 1. DFS
  const result = [];
  const dfs = (node, level = 0) => {
    if (node) {
      if (!result[level]) result[level] = [];
      result[level].push(node.val);
      const children = node.children;
      children.forEach((child) => {
        dfs(child, level + 1);
      });
    }
  };
  dfs(root);

  return result;

  // BFS
  // return bfs(root);
};

function bfs(root) {
  const result = [];
  const queue = [];
  queue.push(root);

  if (!root) {
    return [];
  }

  while (queue.length > 0) {
    const temp = [];
    let size = queue.length;

    while (size--) {
      const node = queue.shift();
      temp.push(node.val);
      const children = node.children;
      children.forEach((child) => queue.push(child));
    }
    result.push(temp);
  }

  return result;
}
