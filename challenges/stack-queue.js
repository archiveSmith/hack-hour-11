/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
<<<<<<< HEAD
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

=======

}


>>>>>>> 5f4ce0fffa71fd52c851263a14b523d045dd8077
/**
* Queue Class
*/


function Queue() {
<<<<<<< HEAD
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

=======
>>>>>>> 5f4ce0fffa71fd52c851263a14b523d045dd8077

}

module.exports = {Stack: Stack, Queue: Queue};
