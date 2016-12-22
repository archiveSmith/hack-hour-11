/**
 * Create a stack.Then create a queue using two stacks.
 */


<<<<<<< HEAD
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
=======
function Stack() {

}

>>>>>>> 5f4ce0fffa71fd52c851263a14b523d045dd8077

/**
* Queue Class
*/


<<<<<<< HEAD
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


=======
function Queue() {

}

>>>>>>> 5f4ce0fffa71fd52c851263a14b523d045dd8077
module.exports = {Stack: Stack, Queue: Queue};
