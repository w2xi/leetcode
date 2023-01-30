/*
 * @lc app=leetcode.cn id=1669 lang=javascript
 *
 * [1669] 合并两个链表
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
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
  let count = 0;
  let prev; // 链表1的第a-1个节点
  let last; // 链表1的第b+1个节点
  let curr = list1;
  while (curr) {
    if (count === a - 1) {
      prev = curr;
    }
    if (count === b + 1) {
      last = curr;
    }
    curr = curr.next;
    count++;
  }
  curr = list2;
  let list2Tail; // 链表2的尾节点
  while (curr) {
    list2Tail = curr;
    curr = curr.next;
  }
  // 将链表2插入到链表1中
  prev.next = list2;
  list2Tail.next = last;

  return list1;
};
// @lc code=end

