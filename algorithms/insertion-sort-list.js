/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 对链表进行插入排序
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  let curr = head;
  let prev = null;

  // 单向链表 -> 双向链表
  while (curr) {
    curr.prev = prev;
    prev = curr;
    curr = curr.next;
  }
  curr = head;
  prev = null;

  // 接下来和数组的插入排序操作类似

  while (curr && curr.next) {
    curr = curr.next;
    prev = curr;
    let currVal = curr.val;

    while (prev.prev && currVal < prev.prev.val) {
      prev.val = prev.prev.val;
      prev = prev.prev;
    }
    prev.val = currVal;
  }
  return head;
};
