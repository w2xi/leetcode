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
 * 填充每个节点的下一个右侧节点指针 II
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;

  if (root.left) {
    if (root.right) {
      root.left.next = root.right;
    } else {
      root.left.next = getNextNode(root.next);
    }
  }
  if (root.right) {
    root.right.next = getNextNode(root.next);
  }

  connect(root.right);
  connect(root.left);

  return root;
};

function getNextNode(root) {
  if (!root) return null;
  if (root.left) return root.left;
  if (root.right) return root.right;
  if (root.next) return getNextNode(root.next);

  return null;
}
