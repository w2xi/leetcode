/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
 */

// @lc code=start
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
var findBottomLeftValue = function(root) {
  // dfs
  let result;
  let maxDepth = Number.MIN_VALUE;

  const dfs = (root, depth) => {
    if (root) {
      if (!root.left && !root.right) { // leaf node
        if (depth > maxDepth) {
          // update
          maxDepth = depth;
          result = root.val;
        }
        return;
      }
      dfs(root.left, depth + 1);
      dfs(root.right, depth + 1);
    }
  }
  dfs(root, 1);

  return result;

  // bfs
  // 拿到最后一层得最后一个值
  const bfs = (root) => {
    const queue = [root];
    let result;

    while (queue.length) {
      let size = queue.length;
      for (let i = 0; i < size; i++){
        const node = queue.shift();
        if (i === 0) {
          result = node.val;
        }
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
    }
    return result;
  }

  return bfs(root);
};
// @lc code=end

