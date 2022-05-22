/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 环形链表 II
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 1. 快慢指针
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // reset
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }

  return null;

  // 2. 集合 (空间复杂度O(n))

  let curr = head;
  const set = new Set();

  while (curr) {
    if (set.has(curr)) {
      return curr;
    }
    set.add(curr);
    curr = curr.next;
  }

  return null;
};
