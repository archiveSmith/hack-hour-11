/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.elements = [];
	this.length = 0;

	this.push = function(item){
		this.elements[this.length] = item;
		this.length++;
		return this.length;
	};

	this.pop = function(){
		let val = this.elements[this.elements.length-1];
		this.elements.length = this.elements.length-1;
		this.length--;
		return val;
	};
}


/**
* Queue Class
*/


function Queue() {
	this.elements = [];
	this.length = 0;

	this.push = function(item){
		this.elements[this.length] = item;
		this.length++;
		return this.length;
	};

	this.pop = function(){
		let val = this.elements[0];
		for( let i = 0; i < this.elements.length; i++){
			this.elements[i] = this.elements[i+1];
		}
		this.elements.length = this.elements.length-1;
		this.length--;
		return val;
	};

}

module.exports = {Stack: Stack, Queue: Queue};
