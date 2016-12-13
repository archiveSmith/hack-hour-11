/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...

  this.stack = {
    max: null,
    //secondMax: null,
    container: {},
    length: 0,
  };
}

Stack.prototype.push = function(value) {
  this.stack.container[this.stack.length] = value;
  this.stack.length += 1;

  if (!this.stack.max || value > this.stack.max) {
    this.stack.max = value;
  }
  // if (!this.stack.secondMax || value > this.stack.secondMax) {
  //   this.stack.secondMax = value;
  // }
  return this.stack.length;
};

Stack.prototype.pop = function() {
  let popped;
  if (this.stack.length > 0) { // condition might be >= 0
    popped = this.stack.container[this.stack.length - 1];
    delete this.stack.container[this.stack.length - 1];
    this.stack.length -= 1;
  }

  if (popped) {
    if (this.stack.length < 1) {
      this.stack.max = null;
    } else if (popped >= this.stack.max) { // condition might be >= 0
      const len = this.stack.length;
      let newMax = this.stack.container[0];
      for (let i = 1; i < len; i += 1) {
        if (this.stack.container[i] > newMax) {
          newMax = this.stack.container[i];
        }
      }
      this.stack.max = newMax;
    }
    return popped;
  } 

  return undefined;


  // if (popped) {
  //   return popped;
  // } else {
  //   return undefined;
  // }
};

Stack.prototype.getMax = function() {
  return this.stack.max;
};

module.exports = Stack;