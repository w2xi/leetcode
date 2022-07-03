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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  // 前序遍历 递归
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

  // 前序遍历 迭代
  // return preOrder(root);
};

function preOrder(root) {
  const stack = [root];
  let sum = 0;
  while (stack.length) {
    const node = stack.pop();
    // left leaf node
    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return sum;
}
