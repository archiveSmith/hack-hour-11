/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.stack = [];
  this.push = function(val) {
    this.stack[this.stack.length] = val;
    return this.stack.length;
  };
  this.pop = function() {
    let tempArr = [];
    for (let i = 0; i < this.stack.length - 1; i++) {
      tempArr[i] = this.stack[i];
    }
    const temp = this.stack[this.stack.length - 1];
    this.stack = tempArr;
    return temp;
  };
  this.getMax = function() {
    let max;
    for (let i = 0; i < this.stack.length; i++) {
      if (i === 0 ) max = this.stack[0];
      if (this.stack[i] > max) max = this.stack[i];
    }
    return max;
  };
}



module.exports = Stack;