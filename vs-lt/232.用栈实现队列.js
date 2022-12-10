/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function() {
  this.stackIn = [];
  this.stackOut = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stackIn.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  // in:  [1, 2, 3, 4]
  // out: []
  // => 
  // in:  []
  // out: [4, 3, 2, 1]

  // 如果输出栈为空, 将输入栈的数据全部导入输出栈
  if (this.stackOut.length === 0) {
    let size = this.stackIn.length;
    while (size--) {
      this.stackOut.push(this.stackIn.pop());
    }
  }
  return this.stackOut.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  // 复用已有方法
  const result = this.pop();
  this.stackOut.push(result);
  return result;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stackIn.length === 0 && this.stackOut.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

