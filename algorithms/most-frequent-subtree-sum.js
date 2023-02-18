/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 508. 出现次数最多的子树元素和
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  const map = new Map();
  const result = [];
  let maxCount = 0; // 最大出现次数

  const dfs = (root) => {
    if (!root) return 0;
    const left = dfs(root.left);
    const right = dfs(root.right);
    const val = left + right + root.val;

    map.set(val, (map.get(val) || 0) + 1); // 记录次数
    maxCount = Math.max(maxCount, map.get(val));

    return val;
  };
  dfs(root);

  map.forEach((count, val) => {
    if (count === maxCount) {
      result.push(val);
    }
  });

  return result;
};
