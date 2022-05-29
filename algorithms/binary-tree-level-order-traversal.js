/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树的层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 1. 先序遍历
  const arr = [];
  const levelOrderNode = (node, level, result) => {
    if (node) {
      // 把每层节点的值放入结果数组中（层数对应数组下标）
      if (result.length === level) {
        result.push([]);
      }
      result[level].push(node.val);
      // 遍历左子树
      levelOrderNode(node.left, level + 1, result);
      // 遍历右子树
      levelOrderNode(node.right, level + 1, result);
    }
  };
  levelOrderNode(root, 0, arr);

  return arr;

  // 2. BFS
  // if (!root) {
  //   return [];
  // }
  // let res = [];
  // const q = [];
  // q.push(root);

  // while (q.length) {
  //   let size = q.length;
  //   const temp = [];

  //   while (size--) {
  //     const node = q.shift();
  //     temp.push(node.val);
  //     if (node.left) {
  //       q.push(node.left);
  //     }
  //     if (node.right) {
  //       q.push(node.right);
  //     }
  //   }
  //   res.push(temp);
  // }
  // return res;
};
