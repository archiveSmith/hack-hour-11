/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {

  this.stack = new Array();

  this.push = function(item) {
    this.stack[this.stack.length] = item;
    return this.stack.length;
  }

  this.pop = function() {
    let popped = this.stack[this.stack.length - 1];
    delete this.stack[this.stack.length - 1];
    return popped;
  }

  this.getMax = function() {
    let max = 0;
    for (let i = 0; i < this.stack.length; i += 1) {
      if(!this.stack[i + 1]) {
        return max;
      }
      if(this.stack[i] > max) {
        max = this.stack[i];
      }
      return max;
    }
  }

}

module.exports = Stack;
