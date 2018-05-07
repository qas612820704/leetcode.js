var Element = function(val, min, next) {
  this.val = val;
  this.min = min;
  this.next = next;

}

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.topElement = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.topElement === null) {
    this.topElement = new Element(x, x, null);
  } else {
    const topElement = this.topElement;

    const min = (x < topElement.min) ? x : topElement.min;

    this.topElement = new Element(x, min, topElement);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.topElement = this.topElement.next;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.topElement ? this.topElement.val : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.topElement ? this.topElement.min : null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
