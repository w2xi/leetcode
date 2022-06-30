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
var findBottomLeftValue = function (root) {
  // 方法一: DFS
  const arr = [];
  const dfs = (node, level = 0) => {
    if (node) {
      arr[level] || (arr[level] = []);
      arr[level].push(node.val);

      dfs(node.left, level + 1);
      dfs(node.right, level + 1);
    }
  };
  dfs(root);

  return arr.at(-1)[0];

  // 方法二: BFS
  // return bfs(root);
};

function bfs(root) {
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    root = queue.shift();
    // 右节点先入栈 因为最后要获取最左边的值
    root.right && queue.push(root.right);
    root.left && queue.push(root.left);
  }

  return root.val;
}
