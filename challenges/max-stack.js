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
let  this.length = 0;

function push (input) {
  this.stack[this.stack.length] = input;
  this.length++;
  return this.stack.length;
}

function pop () {
  let temp = this.stack[this.length-1];
  this.stack = this.stack.slice(0, this.length-1)
  this.length--;
  return temp;
}

function getMax () {
  if (this.length = 0){
    return undefined;
  } else {
  return Math.max.apply(null, this.stack)
  }
}


}

module.exports = Stack;