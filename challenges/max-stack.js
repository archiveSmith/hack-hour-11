/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  return {
    stack: [],
    length: 0,
    push: function(val) {
      if (this.stack[0] === undefined) {
        this.stack[0] = val;
        this.length++;
      } else {
        this.stack[this.length - 1] = val;
        this.length++;
      }
      return this.length;
    },
    pop: function() {
      let val = this.stack[this.length - 1];
      this.stack.length = this.stack.length - 1;
      return val;
    },
    getMax: function() {
      if (this.stack[0] === undefined) return undefined;
      this.stack = this.stack.sort(function(a, b) {
        return a - b;
      })
      return this.stack[this.length - 1];
    }
  }
}

module.exports = Stack;
