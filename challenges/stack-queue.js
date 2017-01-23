/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.push = (val) => {
    this.storage[this.storage.length] = val;
    return this.storage.length;
  };
  this.pop = () => {
    const temp = this.storage[this.storage.length - 1];
    const tempArr = [];
    for (let i = 0; i < this.storage.length - 1; i++) {
      tempArr[i] = this.storage[i];
    }
    this.storage = tempArr;
    return temp;
  };
}


/**
* Queue Class
*/


function Queue() {
  this.input = new Stack();
  this.output = new Stack();
  this.enqueue = (val) => {
    this.input.push(val);
    console.log(this.input.storage);
    console.log(this.output.storage);
  };
  this.dequeue = () => {
    if (!this.output.storage.length) {
      if (!this.input.storage.length) {
        return undefined;
      }
      while (this.input.storage.length) {
        console.log('pop');
        this.output.push(this.input.pop());
      }
    }
    return this.output.pop();
  };
}

module.exports = {Stack: Stack, Queue: Queue};
