// 方法一: 两个队列
// 思路:
// 使用一个备份队列
var MyStack = function () {
  this.queue = [];
  // 用于备份
  this.backup = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  // queue:  [1, 2, 3, 4]
  // backup: []
  // =>
  // queue:  [4]
  // backup: [1, 2, 3]
  // =>
  // queue:  [4, 1, 2, 3]
  // bakcup: []

  // 将 queue 中除了最后一个元素之外的都 copy 到 backup 中
  while (this.queue.length > 1) {
    this.backup.push(this.queue.shift());
  }
  // 将 backup 中的元素 copy 到 queue 中
  while (this.backup.length > 0) {
    this.queue.push(this.backup.shift());
  }

  return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  const result = this.pop();
  this.queue.push(result);

  return result;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
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


// 方法二: 一个队列
// 思路:
// pop 时将除最后一个元素之外的全部弹出并依次 push 到队列中
// 此时队列的第一个元素就是我们需要的

var MyStack = function () {
  this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  // pop
  // [1, 2]
  // =>
  // [2, 1]
  // =>
  // [1]
  let size = this.queue.length;
  while (size-- > 1) {
    this.queue.push(this.queue.shift());
  }
  return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  const result = this.pop();
  this.queue.push(result);
  return result;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
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
