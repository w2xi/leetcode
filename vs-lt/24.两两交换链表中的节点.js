/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }
  const dummyNode = new ListNode(0, head);
  let prev = dummyNode;
  let curr = head;

  // 1 -> 2 -> 3 -> 4
  // => 
  // 2 -> 1 -> 4 -> 3

  while (curr && curr.next) {
    const temp = curr.next.next;
    prev.next = curr.next;
    curr.next.next = curr;
    curr.next = temp;
    prev = curr;
    curr = temp;
  }

  return dummyNode.next;
};
// @lc code=end

