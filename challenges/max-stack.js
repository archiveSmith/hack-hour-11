/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.contents = {};
  this.length = 0;
  this.max = undefined;
}

Stack.prototype.push = function (value) {
  if (value > this.max || this.max === undefined) this.max = value;
  this.contents[this.length] = value;
  this.length += 1;
  return this.length;
};

Stack.prototype.pop = function () {
  if (this.length === 0) return undefined;
  const popped = this.contents[this.length - 1];
  delete this.contents[this.length - 1];
  this.length -= 1;
  if (this.length === 0) this.max = undefined;
  else if (popped === this.max) {
    this.max = Object.values(this.contents).reduce((max, curr) => {
      if (curr > max) return curr;
      return max;
    });
  }
  return popped; 
};

Stack.prototype.getMax = function () {
  return this.max;
};

module.exports = Stack;
