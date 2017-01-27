/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
<<<<<<< HEAD
  this.storage = {};
  this.index = 0;
  this.array = [];
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index += 1;
  this.array.push(value);
  return this.index;
};

Stack.prototype.pop = function() {
  const deleted = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index -= 1;
  this.array.pop();
  return deleted;
}

Stack.prototype.getMax = function() {
  return this.array.length > 0 ? Math.max.apply(Math, this.array) : undefined;
=======
  // body...
>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848
}

module.exports = Stack;