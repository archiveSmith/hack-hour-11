/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
let this.stack = [];

function push (input) {
  this.stack[this.stack.length] = input;
  return this.stack.length;
}

function pop () {
  let temp = this.stack[this.stack.length-1];
  delete this.stack[this.stack.length-1];
  return temp;
}

function getMax () {
  if (this.stack.length = 0){
    return undefined;
  } else {
  return Math.max(...this.stack)
  }
}


}

module.exports = Stack;