/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) return null;
  if (!head.next) return new TreeNode(head.val);

  let slow = head;
  let fast = head;
  // 左边的最后一个节点
  let lastLeft = head;
  // 快慢指针找到中间节点
  while (fast && fast.next) {
    lastLeft = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  const right = slow.next;
  slow.next = null;
  lastLeft.next = null;
  const root = new TreeNode(slow.val);
  root.left = sortedListToBST(head);
  root.right = sortedListToBST(right);

  return root;
};
