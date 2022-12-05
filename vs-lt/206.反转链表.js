/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
  // 递归

  // 1 -> 2 -> 3 -> 4 -> 5
  // =>
  // 5 -> 4 -> 3 -> 2 -> 1

  const reverseNode = (curr, prev) => {
    if (curr) {
      let next = curr.next;
      curr.next = prev;
      return reverseNode(next, curr);
    } else {
      return prev;
    }
  }

  return reverseNode(head, null);

  // 双指针

  // let next = null; // 保存 curr 的下一个节点
  // let prev = null;
  // let curr = head;

  // while (curr) {
  //   next = curr.next
  //   curr.next = prev;
  //   prev = curr;
  //   curr = next;
  // }

  // return prev;
};
// @lc code=end

