/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function() {
  this.queue = [];
  this.backup = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  // 思路: 对 queue 执行出队操作, 当 queue 中只剩一个元素时, 队头元素就是 栈顶元素.
  // queue:  [1, 2, 3, 4]
  // backup: []
  // =>
  // queue:  [4]
  // backup: [1, 2, 3]
  // =>
  // queue:  [4, 1, 2, 3]
  // backup: []

  while (this.queue.length > 1) {
    this.backup.push(this.queue.shift());
  }
  while (this.backup.length > 0) {
    this.queue.push(this.backup.shift());
  }

  return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  const result = this.pop();
  this.push(result);
  return result;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

