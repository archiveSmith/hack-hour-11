/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
  constructor() {
    this.storage = {};
    this.index = 0;
    this.max = 0;
  }

  push(val) {
    this.storage[this.index++] = val;
    this.max = this.max > val ? this.max : val;
    return this.index;
  }

  pop() {
    const poppedVal = this.storage[this.index - 1];
    delete this.storage[this.index - 1]
    this.index -= 1;
    return poppedVal;
  }

  getMax() {
    const index = Object.keys(this.storage);
    if (!this.storage) return undefined;
    return index.reduce((acc, curr) => {
      return this.storage[curr] > acc
      ? this.storage[curr]
      : acc;
    });
  }
}

module.exports = Stack;