/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树的锯齿形层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const arr = [];
  const dfs = (node, level, result) => {
    if (node) {
      dfs(node.right, level + 1, result);
      dfs(node.left, level + 1, result);

      if (!result[level]) result[level] = [];
      // 根据层级的奇偶性判断是前入还是后入数组
      if (level % 2 === 0) {
        result[level].unshift(node.val);
      } else {
        result[level].push(node.val);
      }
    }
  };
  dfs(root, 0, arr);

  return arr;
};
