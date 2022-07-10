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
 */
var BSTIterator = function (root) {
  let prev = null;
  let head = null;
  // 中序遍历
  // 二叉搜索树 => 链表
  const toLinkedList = (root) => {
    if (!root) return null;
    toLinkedList(root.left);
    if (prev) {
      prev.right = root;
    } else {
      head = root;
    }
    root.left = null;
    prev = root;
    toLinkedList(root.right);
  };
  toLinkedList(root);
  this.head = head;
  const dummyNode = new TreeNode(-1);
  dummyNode.right = head;
  this.curr = dummyNode;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  this.curr = this.curr.right;
  return this.curr.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return !!this.curr.right;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
