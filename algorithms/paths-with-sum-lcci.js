/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 面试题 04.12. 求和路径
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  // 对每个节点作为根节点做 dfs 找到所有可能的路径和
  if (root) {
    let count = rootSum(root, sum);
    count += pathSum(root.left, sum);
    count += pathSum(root.right, sum);
    return count;
  } else {
    return 0;
  }
};

var rootSum = function (root, sum) {
  if (!root) {
    return 0;
  }
  let count = 0;
  if (root.val === sum) {
    count++;
  }
  count += rootSum(root.left, sum - root.val);
  count += rootSum(root.right, sum - root.val);

  return count;
};
