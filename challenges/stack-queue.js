/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.index = this.storage.length;
}

Stack.prototype.push = function(value) {
  this.storage.push(value);
}

Stack.prototype.pop = function() {
  return this.storage.pop();
}

/**
* Queue Class
*/


function Queue() {
  
}

module.exports = {Stack: Stack, Queue: Queue};