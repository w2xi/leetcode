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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 1. 从根节点分为 左子树 和 右子树 比较
  const dfs = (root1, root2) => {
    // 都不存在
    if (!root1 && !root2) {
      return true;
    }
    // 有一个不存在
    if (!root1 || !root2) {
      return false;
    }
    // 值不相等
    if (root1.val !== root2.val) {
      return false;
    }

    const outside = dfs(root1.left, root2.right); // 外侧 比较
    const inside = dfs(root1.right, root2.left);  // 内侧 比较
    const isSame = outside && inside;

    return isSame;
  };

  return dfs(root.left, root.right);

  // 2. 层序遍历 存储每层的数据，然后比较
  // return levelOrderTraverse(root);

  // 3. bfs
  // return bfs(root);
};

var levelOrderTraverse = function (root) {
  const arr = [];
  // 层序遍历，存储每一层的数据
  const levelOrderTraverseNode = (node, level = 0) => {
    if (!arr[level]) arr[level] = [];
    arr[level].push(node ? node.val : null);

    if (node) {
      levelOrderTraverseNode(node.left, level + 1);
      levelOrderTraverseNode(node.right, level + 1);
    }
  };
  levelOrderTraverseNode(root);

  for (let item of arr) {
    // 双指针
    let left = 0;
    let right = item.length - 1;
    while (left < right) {
      if (item[left] !== item[right]) {
        return false;
      }
      left++;
      right--;
    }
  }
  return true;
};

var bfs = function (root) {
  const queue = [];
  queue.push(root.left);
  queue.push(root.right);

  while (queue.length) {
    const leftNode = queue.shift();
    const rightNode = queue.shift();

    if (!leftNode && !rightNode) {
      // 左右节点都为空
      continue;
    }
    if (!leftNode || !rightNode) {
      // 左右节点有一个为空
      return false;
    }
    if (leftNode.val !== rightNode.val) {
      // 左右节点值不相等
      return false;
    }
    queue.push(leftNode.left); // 左节点左孩子 入队列
    queue.push(rightNode.right); // 右节点右孩子 入队列
    queue.push(leftNode.right); // 左节点右孩子 入队列
    queue.push(rightNode.left); // 右节点左孩子 入队列
  }

  return true;
};
