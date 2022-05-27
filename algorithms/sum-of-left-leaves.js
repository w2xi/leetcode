/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 左叶子之和
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0;

  const preOrderTraverse = (node) => {
    if (node) {
      // 判断是否是左叶子节点
      if (node.left && !node.left.left && !node.left.right) {
        sum += node.left.val;
      }
      preOrderTraverse(node.left);
      preOrderTraverse(node.right);
    }
  };

  preOrderTraverse(root);

  return sum;
};
