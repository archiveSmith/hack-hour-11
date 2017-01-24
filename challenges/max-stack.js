/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  let lengths = 0;
  let myStack = [];
  
  this.push= function(item){
    myStack[lengths]=item;
    lengths+=1;
    return lengths;
  }

  this.pop = function(){
    let temp = myStack[lengths-1]
    myStack[lengths-1] = undefined;
    lengths -=1;
    return temp;
  }
  
  this.getMax = function(){
    for(let i = 0; i< myStack.length; i++){
      let sortedmyStack = myStack.sort((a,b)=> {return a - b });
      return sortedmyStack[lengths-1];
  }
}
}



module.exports = Stack;