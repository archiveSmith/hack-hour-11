/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.stack = [];

	this.push = function(val) {
		return this.stack.push(val);
	}

	this.pop = function() {
		return this.stack.pop();
	}

	this.length = function() {
		return this.stack.length;
	}
}


/**
* Queue Class
*/


function Queue() {
	this.stack = new Stack();
	this.temp = new Stack();

	this.push = function(val) {
		this.stack.push(val);
	}

	this.pop = function() {
		if (this.stack.length()) {
			let pop;
			while (this.stack.length() > 1) {
				let val = this.stack.pop();
				this.temp.push(val);
			}

			pop = this.stack.pop();

			while (this.temp.length()) {
				this.stack.push(this.temp.pop());
			}

			return pop;
		}
	}
}

// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(4);
// stack.push(8);
// stack.pop();


// //console.log(stack.pop());

// let q = new Queue();
// q.push(1);
// q.push(2);
// q.push(3);
// q.push(4);
// q.push(5);


// console.log(q.pop());
// console.log(q.pop());
// console.log(q.pop());
// console.log(q.pop());
// console.log(q.pop());
// console.log(q.pop());

module.exports = {Stack: Stack, Queue: Queue};
