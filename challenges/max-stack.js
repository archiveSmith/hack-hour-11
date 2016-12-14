mmi/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  let arr = [];
  let lengths = 0;
  this.push = function(num) {
    arr[lengths] = num;
    lengths++;
    return lengths;
  };
  this.pop = function() {
    let popped = arr[lengths - 1];
    arr[lengths - 1] = undefined;
    lengths-=1;
    return popped;
  };
  this.getMax = function() {
    let largest = -Infinity;
    arr.forEach(function(item) {
      if (largest < item) {
        largest = item;
      }
    });
    return largest;
  };
}


module.exports = Stack;