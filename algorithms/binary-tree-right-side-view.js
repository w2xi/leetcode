/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  // 思路：
  // 层序遍历的时候，判断是否遍历到单层的最后面的元素
  // 如果是，就放进result数组中，随后返回result就可以了

  const result = [];
  const queue = [];
  queue.push(root);

  if (!root) return [];

  while (queue.length > 0) {
    let size = queue.length;

    while (size--) {
      const node = queue.shift();

      size === 0 && result.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return result;
};
