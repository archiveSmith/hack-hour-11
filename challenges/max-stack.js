/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 *///

function Stack() {
  // body...
this.stack = [];
this.length = 0;

this.push = function (input) {
  this.stack[this.stack.length] = input;
  this.length++;
  return this.length;
}

this.pop = function () {
  let temp = this.stack[this.length-1];
  this.stack = this.stack.slice(0, this.length-1)
  this.length--;
  return temp;
}

this.getMax = function () {
  if (this.length === 0){
    return undefined;
  } else {
  return Math.max(...this.stack);
  }
}


}

module.exports = Stack;