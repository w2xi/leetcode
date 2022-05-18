var MyLinkedList = function () {
  this.head = null;
  this.count = 0;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}


/** 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.count) {
    return -1;
  }

  return this.getElementAt(index).val;
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val);
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.count, val);
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const node = new ListNode(val);

  if (index < 0) {
    index = 0;
  }
  if (index >= 0 && index <= this.count) {
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let prev = this.getElementAt(index - 1);
      node.next = prev.next;
      prev.next = node;
    }
    this.count++;
  }

};

MyLinkedList.prototype.getElementAt = function (index) {
  if (index >= 0 && index < this.count) {
    let curr = this.head;

    for (let i = 0; i < index && curr; i++) {
      curr = curr.next;
    }
    return curr;
  }
}

/** 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= 0 && index < this.count) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let prev = this.getElementAt(index - 1);
      prev.next = prev.next.next;
    }
    this.count--;
  }
};

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/