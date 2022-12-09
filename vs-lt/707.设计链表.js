/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

var MyLinkedList = function() {
  this.head = null;
  this.count = 0;
};

function ListNode(val, next) {
  this.val = val;
  this.next = next || null;
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.count) {
    return -1;
  }
  return this.getElementAt(index).val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.addAtIndex(0, val);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  this.addAtIndex(this.count, val);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index < 0) {
    index = 0;
  }
  if (index >= 0 && index <= this.count) {
    const node = new ListNode(val);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      // 找到待插入节点的前一个节点
      const prev = this.getElementAt(index - 1);
      node.next = prev.next;
      prev.next = node;
    }
    this.count++;
  }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index >= 0 && index < this.count) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      const prev = this.getElementAt(index - 1);
      prev.next = prev.next.next;
    }
    this.count--;
  }
};

MyLinkedList.prototype.getElementAt = function(index) {
  if (index >= 0 && index < this.count) {
    let curr = this.head;
    for (let i = 0; i < index && curr; i++) {
      curr = curr.next;
    }
    return curr;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

