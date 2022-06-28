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
  // 将queue中除了最后一个元素之外的都copy到backup中
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