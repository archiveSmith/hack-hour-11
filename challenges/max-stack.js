/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 * stack is last in first out....
 */

function Stack() {
  // body...
  this.storage = [];

}

Stack.prototype.push = function(val) {
  this.storage.push(val);
  // body...
};

Stack.prototype.pop = function() {

  this.storage.pop();
}

Stack.prototype.getMax = function() {
  

  let storage = this.storage.sort(function (a,b) {
    return a-b
  });
  return storage[storage.length-1];
}

let poop = new Stack();

poop.push(1);
poop.push(6);
poop.push(2);
poop.pop();
console.log(poop.getMax())

//module.exports = Stack;