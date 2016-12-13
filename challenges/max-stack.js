/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
	this.elements = [];
	this.length = 0;

	this.push = function(item){
		for(let i = this.length; i> 0; i--){
			this.elements[i] = this.elements[i-1];
		}
		this.elements[0] = item;
		this.length++;
		return this.length;
	};

	this.pop = function(){
		let val = this.elements[this.elements.length-1];
		this.elements.length = this.elements.length-1;
		this.length--;
		return val;
	};

	this.getMax = function(){
		if(this.length === 0) return undefined;
		return Math.max(...this.elements);

	}.bind(this);
 
}

module.exports = Stack;