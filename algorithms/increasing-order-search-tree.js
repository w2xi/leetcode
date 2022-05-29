/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递增顺序搜索树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  // 1. 中序遍历  直接改变节点指向
  const dummyNode = new TreeNode(-1);
  let current = dummyNode;
  const inOrderTraverse = (node) => {
    if (node) {
      inOrderTraverse(node.left);
      current.right = node;
      // 左节点置空
      node.left = null;
      current = node;
      inOrderTraverse(node.right);
    }
  };
  inOrderTraverse(root);
  return dummyNode.right;

  // 2. 中序遍历 生成新节点
  // const dummyNode = new TreeNode(-1);
  // let current = dummyNode;

  // const inOrderTraverse = (node) => {
  //   if (node) {
  //     inOrderTraverse(node.left);
  //     current.right = new TreeNode(node.val);
  //     current = current.right;
  //     inOrderTraverse(node.right);
  //   }
  // };
  // inOrderTraverse(root);
  // return dummyNode.right;
};
