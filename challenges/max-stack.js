/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  let storage = [];
  let max = [];
  
  this.push = function(element){
    storage.push(element);
    if (max.length === 0){
      max.push(element);
    }
    else if (element >= max[max.length-1]){
      max.push(element);
    }
    return storage.length;
  }
  
  this.pop = function(){
    if (storage[storage.length-1] === max[max.length-1]){
      max.pop();
    }
    console.log(storage, max);
    return storage.pop();
  }
  
  this.getMax = function() {
    if (!max) return undefined;
    return max[max.length-1];
  }
}

module.exports = Stack;