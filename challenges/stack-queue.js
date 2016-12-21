'use strict';

/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = [];
  this.length = 0;
}

Stack.prototype.push = function (value) {
  this.storage.push(value);
  this.length += 1;
};

Stack.prototype.pop = function () {
  if (this.length < 1) return undefined;
  this.length -= 1;
  return this.storage.pop();
};

/**
* Queue Class
*/

function Queue() {
  this.s1 = new Stack();
  this.s2 = new Stack();
  this.activeQ = this.s1;
  this.nextToGo = this.s2;
  this.length = 0;
}

Queue.prototype.switch = function () {
  if (this.activeQ === this.s1) {
    this.activeQ = this.s2;
    this.nextToGo = this.s1;
  } else {
    this.activeQ = this.s1;
    this.nextToGo = this.s2;
  }
};

Queue.prototype.enqueue = function (value) {
  this.activeQ.push(value);
  this.length += 1;
  if (this.length === 1) this.switch();
};

Queue.prototype.dequeue = function () {
  if (this.length < 1) return undefined;
  const result = this.nextToGo.pop();
  this.length -= 1;
  while (this.activeQ.length > 1) {
    this.nextToGo.push(this.activeQ.pop());
  }
  this.switch();
  return result;
};

module.exports = { Stack: Stack, Queue: Queue };
