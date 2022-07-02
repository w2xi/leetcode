/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树的层序遍历 II (BFS)
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  // BFS
  if (!root) {
    return [];
  }
  const q = [];
  const res = [];
  q.push(root);

  while (q.length) {
    let size = q.length;
    const temp = [];
    while (size--) {
      const node = q.shift();
      temp.push(node.val);
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
    res.unshift(temp);
  }
  return res;

  // DFS
  // const result = [];
  // levelOrderBottonRecursive(root, result);
  // return result.reverse();
};

function levelOrderBottonRecursive(root, result = [], level = 0) {
  if (root) {
    if (!result[level]) result[level] = [];
    result[level].push(root.val);
    levelOrderBottonRecursive(root.left, result, level + 1);
    levelOrderBottonRecursive(root.right, result, level + 1);
  }
}
