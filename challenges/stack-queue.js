/**
 * Create a stack.Then create a queue using two stacks.
 */


 function Stack(n) {
  this.stack = [];
  this.push = (el) => this.stack.push(el);
  this.pop = (el) => {
    if (this.stack = []) {return undefined};
    else {return this.stack.pop(el)};
  };
  this.returnStack = () => this.stack;
}


/**
* Queue Class
*/


function Queue() {

  this.queue = [];
  this.enqueue = (el) {
    this.queue.unshift(el)
  }
  this.dequeue = (el) {
    (if this.queue = [] ){return undefined}
    else {return this.queue.pop(el)};
  }
}


module.exports = {Stack: Stack, Queue: Queue};
