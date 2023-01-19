/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 671. 二叉树中第二小的节点
 * @param {TreeNode} root
 * @return {number}
 */
 var findSecondMinimumValue = function(root) {
  // 哈希集合去重
  const set = new Set();
  const dfs = (root) => {
      if (root) {
          set.add(root.val);
          dfs(root.left);
          dfs(root.right);
      }
  }
  dfs(root);

  if (set.size < 2) return -1;

  // 两个变量 & 一次遍历 找到次小值

  let first = Number.MAX_VALUE;  // 第一小值
  let second = Number.MAX_VALUE; // 第二小值
  // 1,3,-1,2
  set.forEach(val => {
      if (val <= first) {
          second = first;
          first = val;
      } else if (val <= second) {
          second = val;
      }
  })
  return second;
};

var findSecondMinimumValue2 = function(root) {
  // 递归

  // root.val = min(root.left.val, root.right.val)
  // 由于这个条件总是成立, 因此: 根节点必然是全局最小值

  let result = -1;

  const dfs = (root, curr) => {
    if (root) {
      if (root.val !== curr) {
        if (result === -1) { // 第一次赋值
          result = root.val;
        } else {
          result = Math.min(result, root.val);
        }
        return;
      }
      dfs(root.left, curr);
      dfs(root.right, curr);
    }
  }
  dfs(root, root.val);

  return result;
}
