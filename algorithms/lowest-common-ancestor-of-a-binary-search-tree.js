/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let low = p.val;
  let high = q.val;
  if (low > high) {
    const temp = low;
    low = high;
    high = temp;
  }
  // 利用二叉搜索树的特性
  // 只需要 root.val 在 [low, high] 区间 就说明 当前节点就是要找的 最近公共最近祖先
  const dfs = (root) => {
    if (!root) return null;
    if (root.val > high) {
      // 大于区间的最大值
      return dfs(root.left);
    } else if (root.val < low) {
      // 小于区间的最小值
      return dfs(root.right);
    } else {
      // 在 [low, high] 之中
      return root;
    }
  };
  return dfs(root);
};

// 迭代
function helper(root, p, q) {
  // 如果当前结点的值 val 在 [low, high] 之间, 即 val >= low && val <= high
  // 则当前节点就是指定的 `最近公共祖先`
  // 利用二叉搜索树的特性: 根节点大于左子树, 小于右子树

  let low = p.val;
  let high = q.val;

  if (low > high) {
    [low, high] = [high, low];
  }
  while (root) {
    if (root.val > high) {
      // 大于区间的最大值
      root = root.left;
    } else if (root.val < low) {
      // 小于区间的最小值
      root = root.right;
    } else {
      // 在 [low, high] 只见
      return root;
    }
  }
  return null;
}
