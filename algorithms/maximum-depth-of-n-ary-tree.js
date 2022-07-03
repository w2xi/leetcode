/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  // 层序遍历
  if (!root) return 0;
  let depth = 0;
  const queue = [];
  queue.push(root);

  while (queue.length) {
    let size = queue.length;
    depth++;
    while (size--) {
      const node = queue.shift();
      queue.push(...node.children);
    }
  }

  return depth;
};
