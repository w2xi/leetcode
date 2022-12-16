/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  // dfs
  const dfs = (root) => {
    if (!root) return null;
    if (root.left) {
      root.left.next = root.right;
    }
    if (root.right) {
      root.right.next = root.next ? root.next.left : null;
    }
    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);

  return root;

  // 2. BFS 空间复杂度 O(n)
  // return bfs(root);
};

function bfs(root) {
  if (!root) return null;
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let size = queue.length;

    while (size--) {
      const node = queue.shift();
      node.next = size === 0 ? null : queue[0];
      
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return root;
}
