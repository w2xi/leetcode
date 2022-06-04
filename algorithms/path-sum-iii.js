/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 路径总和 III
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (root) {
    let count = rootSum(root, targetSum);
    count += pathSum(root.left, targetSum);
    count += pathSum(root.right, targetSum);
    return count;
  } else {
    return 0;
  }
};

var rootSum = function (root, sum) {
  if (root) {
    let count = 0;
    if (root.val === sum) {
      count++;
    }
    count += rootSum(root.left, sum - root.val);
    count += rootSum(root.right, sum - root.val);
    return count;
  } else {
    return 0;
  }
};
