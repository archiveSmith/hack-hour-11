/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {

    this.storage = {};
    this.index = 0;

    Stack.prototype.push = function(value) {
        this.storage[this.index] = value
        this.index++
    };

    Stack.prototype.pop = function() {
        let top = this.storage[this.index-1];
        delete this.storage[this.index-1];
        this.index--;
        return top;
    }
}



function Queue() {

    let stack1 = New Stack();
    let stack2 = New Stack();

    Queue.prototype.enqueue = function(value) {
        if (stack1.index = 0) {
            stack1.push(value)
        } else {
            for (i in stack1.storage) {
                stack2.push(stack1.storage[i])
            }
            stack1.storage = {};
            stack1.push(value)
            for (i in stack2.storage) {
                stack1.push(stack2.storage)
            }
            stack2.storage = {};
        }
    }

    Queue.prototype.dequeue = function() {
        stack1.pop()
    }



}

module.exports = {Stack: Stack, Queue: Queue};
