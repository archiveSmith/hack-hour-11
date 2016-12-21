/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  
  this.stackProperties = {
    contents: {},
    length: 0
  }
}

Stack.prototype.push = function(val) {
  this.stackProperties.contents[this.stackProperties.length] = val;
  this.stackProperties.length += 1;
}

Stack.prototype.pop = function() {
  if (this.stackProperties.length <= 0) {
    return undefined;
  }

  const popped = this.stackProperties.contents[this.stackProperties.length - 1];
  delete this.stackProperties.contents[this.stackProperties.length - 1];
  this.stackProperties.length -= 1;
  
  return popped;
}

Stack.prototype.getLength = function() {
  return this.stackProperties.length;
}

/**
* Queue Class
*/


function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

// Queue.prototype.dequeue = function() {
//   if (this.stack1.getLength() <=0 ) {
//     return undefined;
//   }

//   while (this.stack1.getLength() > 1) {
//     this.stack2.push(this.stack1.pop());
//   }
//   const dequeued = this.stack1.pop();
  
//   while (this.stack2.getLength() > 0) {
//     this.stack1.push(this.stack2.pop());
//   }
  
//   return dequeued;
// }
Queue.prototype.dequeue = function() {
  if (this.stack1.getLength() <=0 && this.stack.length <= 0) {
    return undefined;
  }

  let dequeued;

  if (this.stack1.length > 0) {
    while (this.stack1.getLength() > 1) {
      this.stack2.push(this.stack1.pop());
    }
    dequeued = this.stack1.pop();
  } else {
    while (this.stack2.getLength() > 1) {
      this.stack1.push(this.stack2.pop());
    }
    dequeued = this.stack1.pop();
  }
  
  return dequeued;
}

Queue.prototype.enqueue = function(val) {
  if (this.stack1.getLength() > 0) {
    this.stack1.push(val);
  } else {
    this.stack2.push(val);
  }
}



module.exports = {Stack: Stack, Queue: Queue};
