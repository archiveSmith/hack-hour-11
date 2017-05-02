/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */


function Stack() {
  this.stack = [];
  this.prevMax = [];
  this.max;
  
  this.push = function(val) {
    this.stack.push(val);
    if (!this.max) {
      this.max = val;
    } else {
      if (val >= this.max) {
        this.prevMax.push(this.max);
        this.max = val;
      }
    }
    return this.stack.length;
  };
  
  this.pop = function() {
    if (this.stack.length) {
      let poppedVal = this.stack.pop();
      if (poppedVal === this.max) {
        this.max = this.prevMax.pop();
      }
      return poppedVal;
    }
  };
  
  this.getMax = function() {
    return this.max;
  };
}

module.exports = Stack;