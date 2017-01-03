"use strict";
/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.list = [];
  this.length = 0;
  this.push = function (item){
    this.list.push(item);
    this.length = this.list.length;
  };
  this.pop = function(item){
    let temp = this.list.pop();
    this.length = this.list.length;
    return temp;
  }
}


/**
* Queue Class
*/


function Queue() {
  this.stackA = new Stack();
  this.stackB = new Stack();
  this.length = 0;

  this.enqueue = function(item){
    //let list = this.stackA.length ? this.stackA : this.stackB;

    this.stackA.push(item);
    this.length++;
  };

  this.dequeue = function(){
    // let list;
    // let holder;
    let value;
    let len;

    if(!this.stackA.length) return undefined;

    len = this.stackA.length;
    for(let i = 0; i  < len - 1; i++){
      this.stackB.push(this.stackA.pop());
    }

    value = this.stackA.pop();

    len = this.stackB.length;
    for(let i = 0; i < len; i++){
      this.stackA.push(this.stackB.pop());
    }

    return value;
  };
}

// let stack = new Stack();
// let queue = new Queue();
//
// for(let i = 0; i < 5; i++){
//   stack.push(i);
//   queue.push(i);
// }
//
// for(let i = 0; i < 5; i++){
//   stack.pop();
//   queue.pop();
// }




module.exports = {Stack: Stack, Queue: Queue};
