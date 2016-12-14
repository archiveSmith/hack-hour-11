/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = [];
  this.push = function(num) {
    this.stack.push(num);
    return stack.length;
  }
  this.pop = function(num) {
    let popped = this
    this.stack.pop(num);
    return popped;
    
  }
  // below should return undefined if array is empty
  this.getMax = function() {
    let largest = -Infinity;
    this.stack.forEach(function(item) {
      if (largest < item) {
        largest = item;
      }
    });
    return largest;
  };
}

module.exports = Stack;