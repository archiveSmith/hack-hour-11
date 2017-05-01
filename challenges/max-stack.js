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
  this.contents[this.length + 1] = ele;
  return this.lenght += 1;
}

module.exports = Stack;