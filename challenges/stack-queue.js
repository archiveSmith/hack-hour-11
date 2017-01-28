/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
let arr = [];
}
 Stack.prototype.push= function(num){
   arr.push(num)
 }

Stack.prototype.pop = function(){
  arr.pop();
}
/**
* Queue Class
*/


function Queue(stack1, stack2) {
  let newStack = [];
  this.prototype.add = function(item){
    newStack.push[item]
  }
  this.prototype.remove = function(arr){
    arr.shift();
  }
}

module.exports = {Stack: Stack, Queue: Queue};
