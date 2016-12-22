/**
 * Create a stack.Then create a queue using two stacks.
 */


/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack(...vals) {
  this.storage = [...vals];
  this.length = vals.length;
}

Stack.prototype.push = function(...val){
  val.forEach((el) => {
    this.storage[this.length] = el;
    this.length += 1;
  })
}

Stack.prototype.pop = function(){
  if (!this.storage.length) return undefined;
  let popVal = this.storage[this.length-1];
  this.storage = this.storage.slice(0,this.length-1)
  this.length -= 1;
  return popVal;
}

/**
* Queue Class
*/


function Queue(...vals) {
  this.back = new Stack (...vals)
}

Queue.prototype.enqueue = function(...val){
  if(val){
  this.back.push(...val);
  return this.back;
  }
}

Queue.prototype.dequeue= function(val) {
  this.back.storage.reverse();
  this.back.pop();
  this.back.storage.reverse();
}


module.exports = {Stack: Stack, Queue: Queue};
