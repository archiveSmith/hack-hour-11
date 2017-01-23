/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage = [];
    this.push = function(val){
        this.storage.push(val);
    };
    this.pop = function(){this.storage.pop()};

}


/**
* Queue Class
*/


function Queue() {

}

let stack = new Stack;
stack.push(3);
stack.push(5);
stack.pop();
console.log(stack.storage);

module.exports = {Stack: Stack, Queue: Queue};
