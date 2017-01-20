/**
 * Create a stack.Then create a queue using two stacks.
 */

// LIFO
class Stack {
  constructor() {
    this.length = 0;
    this.storage = [];
  }

  push(val) {
    this.storage.push(val);
    this.length++;
  }

  pop() {
    const popped = this.storage.pop();
    this.length--;
    return popped;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);

/**
* Queue Class
*/

// FIFO
class Queue {
  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  enqueue(val) {
    this.firstStack.push(val);
  }

  dequeue() {
    this.secondStack.storage = this.firstStack.storage.slice(0).reverse();
    this.secondStack.length = this.firstStack.length;
    this.secondStack.storage.pop();
    this.secondStack.length--
    this.secondStack.storage.reverse();
    this.firstStack.storage = this.secondStack.storage;
    this.firstStack.length--;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue);
console.log(myQueue.dequeue());
console.log('after deque', myQueue);

module.exports = {Stack: Stack, Queue: Queue};
