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
}

Stack.prototype.push = function(ele) {
  this.contents[this.length] = ele;
  return this.length += 1;
}

Stack.prototype.pop = function() {
  if (this.contents === {}) return {};
  else {
    let result = this.contents.splice((this.length - 1), 1);
    this.length -= 1;
    return result;
  }
}

Stack.prototype.getMax = function() {
  if (this.contents === {}) return undefined;
  this.contents.sort((a, b) => a - b);
  return this.contents[this.length - 1];
}

module.exports = Stack;