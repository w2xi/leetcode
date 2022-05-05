// 方法一：栈的后进先出

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 回文链表
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let curr = head;
  let arr = [];

  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  while (head) {
    if (arr.pop() !== head.val) {
      return false;
    }
    head = head.next;
  }

  return true;
};


// 快慢节点 + 反转链表

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head,
    fast = head,
    prev = null;
  // 快慢指针找到 middle node
  while (fast) {
    slow = slow.next;
    fast = fast.next ? fast.next.next : fast.next;
  }
  // 反转后半部分链表
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }
  // 依次比较
  while (head && prev) {
    if (head.val !== prev.val) {
      return false;
    }
    head = head.next;
    prev = prev.next;
  }

  return true;
};
