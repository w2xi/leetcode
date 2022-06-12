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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 1. 迭代 (BFS)
  if (!root) {
    return [];
  }
  let result = [];
  const q = [];
  q.push(root);

  while (q.length) {
    let size = q.length;
    // 保存每层的结果
    const temp = [];

    while (size--) {
      const node = q.shift();
      temp.push(node.val);
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
    result.push(temp);
  }
  return result;

  // 2. 递归 (DFS)
  // return levelOrderRecursive(root);
};

function levelOrderRecursive(root) {
  const result = [];
  const levelOrderTraverseNode = (node, level = 0) => {
    if (node) {
      if (!result[level]) result[level] = [];
      // 把每层的节点值放入到对应层级的数组中
      result[level].push(node.val);

      levelOrderTraverseNode(node.left, level + 1);
      levelOrderTraverseNode(node.right, level + 1);
    }
  };
  levelOrderTraverseNode(root);

  return result;
}
