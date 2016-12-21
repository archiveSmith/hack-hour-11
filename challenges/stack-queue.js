/**
 * Create a stack.Then create a queue using two stacks.
 */


 function Stack() {
   this.storage = {};
   this.index = 0;
 }

 Stack.prototype.push = function(value) {
   this.storage[this.index] = value;
   this.index++;
 }

 Stack.prototype.pop = function () {
   let lastItem = this.storage[this.index - 1];
   delete this.storage[this.index];
   this.index--;
   return lastItem;
 }

 /**
 * Queue Class
 */
 let stackOne = new Stack();
 let stackTwo = new Stack();

 stackOne.push(1);
 stackTwo.push(2);


 function Queue() {
   this.storage = {};
   this.index = 0;
   this.counter = 0;
 }

 Queue.prototype.enqueue = function(value) {
   this.storage[this.index] = value;
   this.index++;
 }

 Queue.prototype.dequeue = function() {
   if (this.storage[this.counter] === undefined) {
     return undefined;
   }

   let firstIn = this.storage[this.counter];
   delete this.storage[this.counter];
   this.counter++;
   return firstIn;
 }

 let stackQueue = new Queue();

 stackQueue.enqueue(stackOne);
 stackQueue.enqueue(stackTwo);


module.exports = {Stack: Stack, Queue: Queue};
