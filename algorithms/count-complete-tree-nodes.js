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
var countNodes = function (root) {
  // 1. 后序遍历 O(n)
  // if (!root) return 0;

  // const leftNum = countNodes(root.left);    // 左边节点的数量
  // const rightNum = countNodes(root.right);  // 右边节点的数量
  // const treeNum = 1 + leftNum + rightNum;   // 以中间节点为根节点的数量 (1 表示中间节点的数量)

  // return treeNum;

  // 2. 层序遍历 O(n)
  // return bfs(root);

  // 3. 后序遍历 (完全二叉树) O(log n * log n)
  return postOrder(root);
};

function bfs(root) {
  if (!root) return 0;
  const queue = [root];
  let count = 0;

  while (queue.length) {
    let size = queue.length;
    while (size--) {
      // 记录节点数
      count++;
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return count;
}

// O(log n * log n)
function postOrder(root) {
  if (!root) return 0;
  let left = root.left;
  let right = root.right;
  let leftHeight = 0, rightHeight = 0;

  while (left) {                    // 计算左子树左侧节点深度
    leftHeight++;
    left = left.left;
  }
  while (right) {                   // 计算右子树右侧节点深度
    rightHeight++;
    right = right.right;
  }

  if (leftHeight === rightHeight) { // 满二叉树节点数量
    return (2 << leftHeight) - 1;
  }

  const leftNum = postOrder(root.left);
  const rightNum = postOrder(root.right);

  return 1 + leftNum + rightNum;
}