/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
   this.maxNum;
   this.length = 0;
   this.storage;
   this.push = function (num) {
      if (!this.storage) {
        this.storage = [num];
        this.maxNum = num;
        this.length = 1;
      }
      else {
        this.storage[this.storage.length] = num;
        if (num > this.maxNum) {
          this.maxNum = num;
        }
        this.length++;
      }
      return this.length;
    };
   this.pop = function () {
      if (this.storage.length > 0) {
        let temp = this.storage[this.storage.length-1];
        this.storage.splice(-1, 1);
        if (temp === this.maxNum && this.storage.length > 1) {
          this.storage.sort(function(a,b){return a-b});
          this.maxNum = this.storage[this.storage.length-1];
        }
        this.length--;
        return temp;
      }
   };
   this.getMax = function () {return this.maxNum};
}

module.exports = Stack;