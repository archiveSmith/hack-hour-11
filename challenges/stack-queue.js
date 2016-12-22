/**
 * Create a stack.Then create a queue using two stacks.
 */


 function Stack(n) {
  this.stack = [];
  this.add = (el) => this.stack.push(el);
  this.remove = (el) => this.stack.pop(el);
  this.returnStack = () => this.stack;
}


/**
* Queue Class
*/


function Queue() {

  this.queue = [];
  this.mergeStacks = (s1, s2) => {
    let len = 0;
    if (s1.length < s2.length){len = s1.length}
    else {len = s2.length}

    for (let i = 2; i < (len*2 + 2); i += 1) {
     if (i % 2 === 0) {
       this.queue.unshift(s1.shift());
     }

     else {
       this.queue.unshift(s2.shift());
     }
    }

    if (s1.length < s2.length) {
     this.queue.unshift(...s2.reverse());
    }
    else if (s2.length < s1.length) {
     this.queue.unshift(...s1.reverse());
    }

    return this.queue;
  };
}

let s1 = new Stack();
let s2 = new Stack();

for (let i = 0; i < 5; i += 1) {
  s1.add(i);
  s2.add(i*10);
}

s1 = s1.returnStack();
s2 = s2.returnStack();

let Queuer = new Queue();
Queuer.mergeStacks(s1, s2);

module.exports = {Stack: Stack, Queue: Queue};
