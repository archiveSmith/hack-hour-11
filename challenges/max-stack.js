<<<<<<< HEAD
/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */


 function Stack() {
   this.items = [];
   this.max = [];
 }

 Stack.prototype.push = function(val){
   this.items.push(val);
   if(this.items.length === 1){
     this.max.push(val);
   }else{
     let max = val > this.max[this.max.length - 1] ? val : this.max[this.max.length - 1];
     this.max.push(max);
   }
 };

 Stack.prototype.pop = function(val){
   if( this.items.length === 0) return undefined;
   this.max.pop();
   return this.items.pop();
 };

 module.exports = Stack;
=======
"use strict";
/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.items = [];
  this.max = [];
}

Stack.prototype.push = function(val){
  this.items.push(val);
  if(this.items.length === 1){
    this.max.push(val);
  }else{
    let max = val > this.max[this.max.length - 1] ? val : this.max[this.max.length - 1];
    this.max.push(max);
  }
};

Stack.prototype.pop = function(val){
  if( this.items.length === 0) return undefined;
  this.max.pop();
  return this.items.pop();
};

module.exports = Stack;
>>>>>>> b88518ba4a825daf714355ece5267450fc502e08
