/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let aResult = [], bResult = []

  while (l1 || l2) {
    if (l1) {
      aResult.push(l1.val)
      l1 = l1.next
    }
    if (l2) {
      bResult.push(l2.val)
      l2 = l2.next
    }
  }

  aResult = BigInt(aResult.reverse().join(''))
  bResult = BigInt(bResult.reverse().join(''))

  let sum = aResult + bResult
  let head = null

  if (sum === 0) {
    return new ListNode(sum)
  }

  sum.toString().split('').forEach(num => {
    num = Number(num)

    if (!head) {
      head = new ListNode(num)
    } else {
      head = new ListNode(num, head)
    }
  })

  return head
};