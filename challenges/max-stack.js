/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 * stack is last in first out....
 */

function Stack() {
  // body...
  let stack = {
    storage: {},
    length: 0,
    push: function(val){
    this.length++;
    this.storage['length'] = val;
      return this.length;
    },
    pop: function(){
      let element = this.storage['this.length'];
      delete this.storage['length'];
      this.length--;
      return element;
    },
    getMax: function(){
     let values = Object.values(storage)
    }

  }
  return stack;


}



module.exports = Stack;