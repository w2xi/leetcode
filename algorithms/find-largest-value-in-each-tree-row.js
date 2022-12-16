/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 在每个树行中找最大值
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let size = queue.length;
    let max = queue[0].val;
    // 通过size实现按层处理
    while (size--) {
      const node = queue.shift();
      // update max
      if (node.val > max) {
        max = node.val;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(max);
  }

  return result;
};
