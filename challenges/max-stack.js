/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
	this.array = [];
	this.length = 0;
}

Stack.prototype.push = function(element) {
	this.array[this.length] = element;
	this.length += 1;
	return this.length;
}

Stack.prototype.pop = function() {
	let popped = this.array[this.length - 1];
	this.array.splice((this.length - 1), 1);
	this.length -= 1;
	return popped;
}

Stack.prototype.getMax = function() {
 	return Math.max(...this.array);
}

module.exports = Stack;