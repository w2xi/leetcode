var MinStack = function () {
  this.items = [];
  this.minValue;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.minValue == null || val < this.minValue) {
    this.minValue = val;
  }
  this.items.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.items.pop();
  this.minValue = Math.min(...this.items);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (!this.isEmpty()) {
    return this.items[this.size() - 1];
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (!this.isEmpty()) {
    return this.minValue;
  }
};

MinStack.prototype.isEmpty = function () {
  return this.size() === 0;
};

MinStack.prototype.size = function () {
  return this.items.length;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
