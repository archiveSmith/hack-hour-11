/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.index = 0;
}

Stack.prototype.push = function(val) {
  this.storage[this.index] = val;
  this.index++;
  return val;
}

Stack.prototype.pop = function() {
  const temp = this.storage[this.index-1];
  delete this.storage[this.index--];
  return temp;
}

/**
* Queue Class
*/


function Queue() {
  this.in = new Stack();
  this.out = new STack();
}

Queue.prototype.enqueue = function(val) {
  this.in.push(val);
  return val;
}

Queue.prototype.dequeue = function() {
  if (this.out.index === 0) {
    if (this.in.index === 0) return undefined;
    while (this.in.index > 0) {
      this.out.push(this.in.pop());
    }
  }
  return this.out.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
