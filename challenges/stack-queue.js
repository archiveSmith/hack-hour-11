/**
 * Create a stack.Then create a queue using two stacks.
 */


 function Stack() {
  this.stack = [];
  this.push = (el) => {this.stack.push(el); return el;};
  this.pop = () => {
    if (this.stack == []) {return undefined}
    else {return this.stack.pop()}
  };
}


/**
* Queue Class
*/


function Queue() {
  let inbox = new Stack();
  let outbox = new Stack();

  this.enqueue = (el) => {
    this.inbox.push(el);
    return el;
  };

  this.dequeue = () => {
    this.outbox.push(inbox.pop());
    return outbox;
  };
}

module.exports = {Stack: Stack, Queue: Queue};
