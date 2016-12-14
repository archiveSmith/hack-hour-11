/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.value = [];
  this.len =  0;
  this.maxValue = -Infinity;
}

Stack.prototype.push = function(el) {
   this.value[this.len] = el;
    this.len++;
    this.maxValue = el > this.maxValue ? el : this.maxValue;
    return this.len;
};

Stack.prototype.pop = function() {
    if (this.len < 1) return undefined;
    let pop =  this.value[this.len-1];
    this.value.splice(this.len-1, 1)
    this.len --
    if (pop === this.maxValue){ this.maxValue = this.value.reduce((acc, el) => el > acc ? el : acc); }
    return pop; 
}
  
Stack.prototype.getMax = function() {
  return this.maxValue || undefined;
}

module.exports = Stack;