/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  // 暴力破解
  const arr = [];
  let curr = head;

  while (curr) {
    let temp = curr;
    let maxValFlag = true;
    while (temp.next) {
      temp = temp.next;
      if (temp.val > curr.val) {
        arr.push(temp.val);
        maxValFlag = false;
        break;
      }
    }
    if (maxValFlag) {
      arr.push(0);
    }
    curr = curr.next;
  }
  return arr;
};
