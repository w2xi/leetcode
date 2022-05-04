// 方法一：集合(Set)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let curr = head;
  let s = new Set();

  while (curr) {
    if (s.has(curr)) {
      return true;
    }
    s.add(curr);
    curr = curr.next;
  }

  return false;
};

// 方法二：快慢指针
// Reference: https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnwzei/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 快慢指针
  let fast = head,
    slow = head;

  while (fast && fast.next) {
    // 慢指针每次走一步
    slow = slow.next;
    // 快指针每次走两步
    fast = fast.next.next;
    // 如果相遇，则说明有环
    if (fast === slow) {
      return true;
    }
  }

  return false;
};
