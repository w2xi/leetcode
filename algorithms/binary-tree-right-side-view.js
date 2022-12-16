/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 199. 二叉树的右视图
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const result = [];
  const queue = [];
  root && queue.push(root);

  while (queue.length) {
    let size = queue.length;
    result.push(queue[0].val);

    while (size--) {
      const node = queue.shift();
      node.right && queue.push(node.right);
      node.left && queue.push(node.left);
    }
  }

  return result;
};
