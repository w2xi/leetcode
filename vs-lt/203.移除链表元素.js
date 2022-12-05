/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  // 递归

  // let curr = head;

  // if (curr) {
  //   curr.next = removeElements(curr.next, val);
  //   if (val === curr.val) {
  //     return curr.next;
  //   }
  // }
  // return curr;

  // 迭代

  let dummyNode = new ListNode(0, head);
  let curr = dummyNode;

  while (curr.next) {
    if (val === curr.next.val) {
      curr.next = curr.next.next;
      continue;
    }
    curr = curr.next;
  }

  return dummyNode.next;
};
// @lc code=end

